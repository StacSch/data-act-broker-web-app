#### December 21, 2016
On November 30, 2016, we released improvements to the Broker. Now we are continuing to improve the Broker, updating DAIMS, and responding to issues discovered through testing and agency use.

In this version of the Broker, we updated how the Broker processes several rules, 

  - [Processing of Validation Rules](#/help?section=processingRules1123)
  - [Item 2](#/help?section=Item2)
  - [Item 3](#/help?section=Item3)
  - [Browser Requirements & Known Issues](#/help?section=browser)
  - [Accessibility Statement](#/help?section=accessibilityStatement)

##### Processing of Validation Rules{section=processingRules1123}

We updated how the Broker processes some rules.

 * A33: To address reporting entity and exclude Financing Accounts from required TAS. Each TAS reported to GTAS for SF 133 should be reported in File A, and vice versa, for the same reporting period, with the exception of Financing Accounts.
 * B5: To reflect that the CPE amount should be activity.
 * B11: Invalid Object Class will prompt critical error; '000' can be provided but will give warning. Must be a valid 3-digit object class as defined in OMB Circular A-11 Section 83.6, or a 4-digit code which includes a 1-digit prefix that distinguishes direct, reimbursable, and allocation obligations. Do not include decimal points when reporting in the Schema. For amounts that cannot yet be allocated to a valid object class, input 000, although note that this will prompt a warning.
 
##### Item 2 FAQ{section=Item2}

The TransactionObligatedAmount FAQ document has been added to the [Resources](/#/resources) page in Help.

##### Item 3{section=Item3}

When a user clicks the Submission Dashboard, submissions are displayed in two tables, one for In Progress and one for Completed and Certified.

##### Browser Requirements & Known Issues{section=browser}
The Broker is currently tested with the following browsers:

* Internet Explorer version 10 and higher
* Firefox (current version)
* Chrome (current version)
* Safari (current version)

Although you may use any browser/version combination you wish, we cannot support browsers and versions other than the ones stated above.

Known Issues

* The Broker will not work when using Internet Explorer under medium privacy settings or high security settings.

##### Accessibility Statement{section=accessibilityStatement}

###### Commitment and Guidelines

The DATA Act implementation team is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. To meet this commitment we develop this website to conform to the [Web Content Accessibility Guidelines 2.0](https://www.w3.org/TR/WCAG/). These guidelines explain how to make websites more accessible to people with disabilities, and we believe they also make our website easier for everyone to use.
The [Accessible Rich Internet Applications Suite (WAI-ARIA)](https://www.w3.org/WAI/intro/aria) addresses accessibility challenges by defining new ways to provide functionality with assistive technology. With WAI-ARIA, developers are able to provide usable and accessible advanced Web applications to people with disabilities. Alpha-broker.usaspending.gov also uses The Voluntary Product Accessibility Template® (VPAT®) to document adherence with Section 508 of the Rehabilitation Act accessibility standards.

We know our website changes regularly so we’re always looking for ways to improve. If there is information you think should be included on this page, or if you experience any difficulty accessing this site, please contact us at [DATABroker@fiscal.treasury.gov](mailto:DATABroker@fiscal.treasury.gov) for assistance.

###### Documents

The documents offered within Alpha-broker.usaspending.gov use multiple file formats. Below is a list that will help you identify which software downloads are needed to view different file extensions. If you require a file format other than those currently provided or experience accessibility issues, please contact us at [DATABroker@fiscal.treasury.gov] (mailto:DATABroker@fiscal.treasury.gov) for assistance.

###### Document Files

*  Windows Operating System .TXT files can be viewed on any Windows-based document reader.
* [Adobe Reader](https://get.adobe.com/reader/) (.pdf) For viewing and printing PDF documents.
* [Microsoft Word Viewer](http://www.microsoft.com/en-us/download/details.aspx?id=4) (.doc, .docx) For viewing, printing, and copying Word documents without having Microsoft Word installed. It replaces Word Viewer 2003 and previous versions.
* [Microsoft Excel Viewer](http://www.microsoft.com/en-us/download/details.aspx?id=10) (.xls, .xlsx) For viewing and printing Excel workbooks without having Microsoft Excel installed. It replaces Excel Viewer 97 and previous versions.
* [Microsoft PowerPoint Viewer](http://www.microsoft.com/en-us/download/details.aspx?id=6) (.ppt, .pptx) For viewing full-featured presentations created in PowerPoint 97 and later versions.
