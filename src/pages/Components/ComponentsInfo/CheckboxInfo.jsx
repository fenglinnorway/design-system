import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { CheckboxGroup, Divider, LeadParagraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Check boxes provides the user with a range of options where the user may select any number of choices, one, multiple or zero.
The default view for checkboxes has no options selected and the options provided should be listed in alphabetical order. 
`;

const overviewTextCheckbox = `
Check boxes have 3 different states, alternating between unchecked, hover and checked.
In the unchecked state the check boxes are neutral with a greyed border.
As the user hovers over an unchecked box it transforms into a thicker border and turns green,
at the same time a light green stripe will appear over the hovered check box row.
When an option is checked by the user, the box will be filled and a check-icon will be displayed. 
`;

const tabItems = [
	{
		title: 'Oversikt',
		path: '/overview',
	}, {
		title: 'Begrunnelse',
		path: '/rationale',
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

const codeExample = `
<CheckboxGroup
	header="Header"
	onChange={() => callback}
	selectedValue="item2"
	items={[
		{ label: 'Checkbox 1', value: 'checkbox1' },
		{ label: 'Checkbox 2', value: 'checkbox2' },
		{ label: 'Checkbox 3', value: 'checkbox3', disabled: true },
	]}
/>
`;

const codeExampleHtml = `
<div class="ssb-checkbox-group">
  <div class="ssb-title no-margin"><h5>Title</h5></div>
  <div class="ssb-checkbox">
    <input type="checkbox" id="option1" value="option1" />
    <label class="checkbox-label" for="option1">Insert label</label>
  </div>
  <div class="ssb-checkbox">
    <input type="checkbox" id="option2" value="option2" />
    <label class="checkbox-label" for="option2">Insert label</label>
  </div>
</div>
`;

const CheckboxInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Checkbox</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">CheckboxGroup</Title>
						<div className="col-lg-6">
							<p>{overviewTextCheckbox}</p>
						</div>
						<div className="col-lg-6">
							<CheckboxGroup
								header="Header"
								items={[
									{ label: 'Checkbox 1', value: 'checkbox1' },
									{ label: 'Checkbox 2', value: 'checkbox2' },
									{ label: 'Checkbox 3', value: 'checkbox3', disabled: true },
								]}
							/>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExample} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div>
						<Title size={2}>Props</Title>
						<table className="col-lg-12">
							<thead style={{ textAlign: 'left' }}>
								<tr>
									<th><Title size={3}>Prop name</Title></th>
									<th><Title size={3}>Type</Title></th>
									<th><Title size={3}>Description</Title></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>header</code></td>
									<td>string</td>
									<td>Header above checkbox</td>
								</tr>
								<tr>
									<td><code>items</code></td>
									<td>array of objects</td>
									<td>A list of checkboxes. Object <code>label</code> and <code>value</code> is required</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			)}
		</div>
	);
};

export default CheckboxInfo;
