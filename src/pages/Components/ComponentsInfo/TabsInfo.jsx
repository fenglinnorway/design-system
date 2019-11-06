import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Tabs are a navigational element that allows the user to navigate between related pages or views while retaining the context. 
It is important to remember that because the tab navigation is a horizontal list, it does not accommodate a long string of text. 
It is better to try having short and concise wording instead. 
`;

const overviewTextTabs = `
Tabs consist of 3 different elements, a label header that describes the content of the tab element. 
Sub headers that describe each option within the tab and an indicator element that shows active tab by underlining it with a green rectangle. 
When in hover it instead underlines the hovered element with a dark rectangle.
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
<Tabs
	items={[
		{ title: 'Item 1', path: 'item1/' },
		{ title: 'Item 2', path: 'item2/' },
		{ title: 'Item 3', path: 'item3/' },
	]}
/>
`;

const codeHtml = `
<div class="ssb-tabs">
  <div class="navigation-item" onclick="insert function">
    <span>Item 1</span>
  </div>
  <div class="navigation-item" onclick="insert function">
    <span>Item 2</span>
  </div>
  <div class="navigation-item" onclick="insert function">
    <span>Item 3</span>
  </div>
</div>
`;

const TabsInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Tabs</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mt-3">
						<Title size={2} className="col-lg-12">Tabs</Title>
						<div className="col-lg-6">
							<p>{overviewTextTabs}</p>
						</div>
						<div className="col-lg-6">
							<Tabs
								activeOnInit="item1/"
								items={[
									{ title: 'Item 1', path: 'item1/' },
									{ title: 'Item 2', path: 'item2/' },
									{ title: 'Item 3', path: 'item3/' },
								]}
							/>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3 mt-3" />

					<div>
						<Title size={2} className="mt-3">Props</Title>
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
									<td><code>activeOnInit</code></td>
									<td>string</td>
									<td>Will set an item to be active on init</td>
								</tr>
								<tr>
									<td><code>items</code></td>
									<td>arrayOf(title, path) </td>
									<td>Sets label and path of buttons</td>
								</tr>
								<tr>
									<td><code>onClick</code></td>
									<td>func</td>
									<td>Callback function</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			)}
			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Underscore</Title>
						<div className="col-lg-6">
							By using an underscore underneath the tabs, it becomes easier for the user to separate between the content.
							Especially using different colors between green and dark and having the underscore pop up during active hover.
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default TabsInfo;
