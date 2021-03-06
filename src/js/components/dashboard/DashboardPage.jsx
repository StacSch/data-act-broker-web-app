/**
  * DashboardPage.jsx
  * Created by Kevin Li 10/21/16
  **/

import React from 'react';
import Navbar from '../SharedComponents/navigation/NavigationComponent.jsx';
import Footer from '../SharedComponents/FooterComponent.jsx';
import DashboardContainer from '../../containers/dashboard/DashboardContainer.jsx';

export default class DashboardPage extends React.Component {
	render() {
		return (
            <div>
                <div className="usa-da-site_wrap usa-da-dashboard-page">
                    <Navbar activeTab="dashboard"/>
                    <div className="usa-da-content-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mt-40 mb-20">
                                    <div className="display-2" data-contentstart="start" tabIndex={-1}>
                                        Submission Dashboard
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DashboardContainer />
                </div>
                <Footer />
            </div>
		)
	}
}