import Request from './sessionSuperagent.js';
import Q from 'q';
import AWS from 'aws-sdk';
import { dispatch } from 'redux';
import _ from 'lodash';

import StoreSingleton from '../redux/storeSingleton.js';

import { kGlobalConstants } from '../GlobalConstants.js';
import * as uploadActions from '../redux/actions/uploadActions.js';

import { fileTypes } from '../containers/addData/fileTypes.js';
import * as AdminHelper from './adminHelper.js';

export const fetchStatus = (submissionId) => {
	const deferred = Q.defer();

	Request.post(kGlobalConstants.API + 'check_status/')
	        .send({'submission_id': submissionId})
	        .end((errFile, res) => {

	        	if (errFile) {
	        		deferred.reject({
	        			reason: res.statusCode,
	        			error: errFile
	        		});
	        	}
	        	else {

	        		// return only jobs related to CSV validation
	        		const response = Object.assign({}, res.body);
	        		const csvJobs = [];
	        		response.jobs.forEach((job) => {
	        			if (job.job_type == 'csv_record_validation') {
	        				csvJobs.push(job);
	        			}
	        		});

	        		response.jobs = csvJobs;

	        		deferred.resolve(response);
	        	}

	        });

	return deferred.promise;
}

export const fetchErrorReports = (submissionId) => {
	const deferred = Q.defer();

	Request.post(kGlobalConstants.API + 'submission_error_reports/')
			.send({'submission_id': submissionId})
			.end((errFile, res) => {

				if (errFile) {
					deferred.reject(errFile);
				}
				else {
					deferred.resolve(res.body);
				}

			});

	return deferred.promise;
}

const getFileStates = (status) => {
	let output = {};

	status.jobs.forEach((item) => {
		output[item.file_type] = item;
		output[item.file_type].report = null;
		output[item.file_type].error_count = 0;

		// force an error_data array if no field is passed back in the JSON
		if (!item.hasOwnProperty('error_data')) {
			output[item.file_type].error_data = [];
		}
		else {
			let count = 0;
			item.error_data.forEach((error) => {
				count += parseInt(error.occurrences);
			});

			output[item.file_type].error_count = count;
		}

	});

	return output;
}


const getFileReports = (status, reports) => {

	for (let key in status) {
		let item = status[key];
		item.report = reports['job_' + item.job_id + '_error_url'];

		// alphabetize any missing and duplicated headers
		item.missing_headers = _.sortBy(item.missing_headers);
		item.duplicated_headers = _.sortBy(item.duplicated_headers);
	}

	return status;
}

export const validateSubmission  = (submissionId) => {

	const deferred = Q.defer();

	// set the submission ID
	const store = new StoreSingleton().store;
	store.dispatch(uploadActions.setSubmissionId(submissionId));

	let status;

	fetchStatus(submissionId)
		.then((statusRes) => {
			status = getFileStates(statusRes);
			return fetchErrorReports(submissionId);
		})
		.then((reports) => {
			getFileReports(status, reports);
			deferred.resolve(status);
		})
		.catch((err) => {
			deferred.reject(err);
		});

	return deferred.promise;

}

export const listUsers = () => {
	const deferred = Q.defer();

	let request = {
		filter_by: "status",
		value: "approved"
	};
	
	Request.post(kGlobalConstants.API + 'list_users/')
		.send(request)
		.end((err, res) => {
			if (err) {
				deferred.reject(err);
			}
			else {
				// break up the permissions
				const users = [];
				res.body.users.forEach((user) => {
					// sometimes python adds extra spaces to the comma separated list, so strip those out
					const permString = user.permissions.replace(/\s/g, '');
					user.permissions = permString.split(',');

					const status = AdminHelper.determineStatus(user);

					user.statusString = status.string;
					user.statusType = status.type;

					users.push(user);
				});
				deferred.resolve(users);
			}
		});

	return deferred.promise;
}

export const sendNotification = (users, id) => {
    const deferred = Q.defer();

    Request.post(kGlobalConstants.API + 'email_users/')
        .send({
        	'users': users,
        	'email_template': 'review_submission',
        	'submission_id': id
        })
        .end((errFile, res) => {
            if (errFile) {
                deferred.reject(errFile);
            }
            else {
                deferred.resolve(res.body);
            }
        });
    return deferred.promise;
}