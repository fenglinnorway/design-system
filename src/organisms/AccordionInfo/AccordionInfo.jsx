import React from 'react';
import PropTypes from 'prop-types';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import Accordion from '@molecules/Accordion/Accordion';

const subHeader = `
Accordions maximizes efficiency and saves space by expand and collapse sections of content.
This allows the user to display the content of their choosing,
therefore accordion components are always closed by default.
`

const tabItems = [
	{
		title: 'Overview',
		path: '/overview',
	}, {
		title: 'Rationale',
		path: '/rationale',
	}, {
		title: 'Accessibility',
		path: '/accessibility',
	},
];

const AccordionInfo = ({ match }) => {
	console.log(match);
	return (
		<div>
			<h1>Accordion</h1>
			<LeadParagraph>
				{subHeader}
			</LeadParagraph>
			<Tabs items={tabItems} />
			<div className="row">
				<div className="col-lg-6">
					<h3>{match.params.type}</h3>
					<p>
						Primary accordion are used when the content is important to the understanding of the page and something
						that we want the user to view. By using the primary accordion the emphasis is put on the importance of the content.
					</p>
				</div>
				<div className="col-lg-6">
					<Accordion primary header="This is a primary header">
						This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
					</Accordion>
				</div>
			</div>
		</div>
	);
}

AccordionInfo.defaultProps = {};

AccordionInfo.propTypes = {
	match: PropTypes.object,
};

export default AccordionInfo;
