import React, { useState } from 'react';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, RadioGroup, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Norsk teksforklaring kommer her.
Radio buttons allows the user to select a single selection among a groups of options which includes at least two or more choices. 
In a radio button list the options should always be independent from every other option and by default no radio element should be selected.
`;

const overviewTextRadiobutton = `
Radio buttons have 3 different states, alternating between unchecked, hover and checked. 
In the unchecked state the radio buttons are neutral with a greyed circle. 
As the user hover over an unchecked radio button it transforms into a thicker circle and turns green, 
at the same time a light green stripe will appear over the hovered radio button row. 
When a radio button is selected by the user, a dark circle will fill the selected radio button. 
`;

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

const tabCode = [
	{
		title: 'React',
		path: '/react',
	}, {
		title: 'Html',
		path: '/html',
	},
];

const codeReact = `
<RadioGroup
	header="Header"
	items={[
		{ label: 'Item 1', value: 'item1' },
		{ label: 'Item 2', value: 'item2' },
		{ label: 'Item 3', value: 'item3', disabled: true },
	]}
/>
`;

const codeHtml = `
<div class="ssb-radio-group">
    <div class="ssb-title no-margin"><h5>Title</h5></div>
    <div class="ssb-radio">
        <input type="radio" id="option1" value="option1" />
        <label class="radio-label" for="option1">Insert label</label>
    </div>
    <div class="ssb-radio">
        <input type="radio" id="option2" value="option2" />
        <label class="radio-label" for="option2">Insert label</label>
    </div>
</div>
`;

const RadioButtonInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => {
		changeTab(e);
	};
	const tabCodeClicked = e => {
		changeCodeTab(e);
	};

	return (
		<div className="col-lg-12">
			<Title size={1}>Radio buttons</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mt-3">
						<Title size={3} className="col-lg-12">RadioGroup</Title>
						<div className="col-lg-6">
							<p>{overviewTextRadiobutton}</p>
						</div>
						<div className="col-lg-6">
							<RadioGroup
								header="Header"
								items={[
									{ label: 'Item 1', value: 'item1' },
									{ label: 'Item 2', value: 'item2' },
									{ label: 'Item 3', value: 'item3', disabled: true },
								]}
							/>
						</div>
						<div className="col-lg-12">
							<Divider light className="mt-3" />
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider />
							{activeCodeTab === '/react' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>React code</Title>
									<CodeSnippet code={codeReact} language="jsx" />
								</div>
							)}
							{activeCodeTab === '/html' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>Html code</Title>
									<CodeSnippet code={codeHtml} language="html" />
								</div>
							)}
						</div>
					</div>

					<div className="row">
						<Title size={3} className="col-lg-12 mt-3">Props</Title>
						<table className="col-lg-12">
							<thead style={{ textAlign: 'left' }}>
								<tr>
									<th><h5>Prop name</h5></th>
									<th><h5>Type</h5></th>
									<th><h5>Description</h5></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>header</code></td>
									<td>string</td>
									<td>Renders a h5 title</td>
								</tr>
								<tr>
									<td><code>items</code></td>
									<td>arrayOf(label, value) </td>
									<td>Required items for rendering radio buttons</td>
								</tr>
								<tr>
									<td><code>onChange</code></td>
									<td>func</td>
									<td>Callback function when a value is changed </td>
								</tr>
								<tr>
									<td><code>selectedValue</code></td>
									<td>string</td>
									<td>Pre selected value</td>
								</tr>
							</tbody>
						</table>
					</div>


				</div>
			)}
		</div>
	);
};

export default RadioButtonInfo;
