import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { ProfileBox, Divider, LeadParagraph, Link, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Profiled box content are used by various type of content such as statistic,
news articles in order to provide a quick overview of the content so the user can quickly identify what they would like to access.
The appearance of the different profiled boxes are quite different in style and look,
this in order to make it easier for user to distinguish between the different types.  
`;

const profileBoxStaticText = `
The statistic version of the profiled box element are grouped into groups of 3. At the top of the boxes,
there is always a heading which states the type of content displayed below. A statistic profiled box element has a light green fill.
At the top, a sub-header states the type of the content the box is displaying accompanied by a link header and a short paragraph which describes the content within.
`;

const rationaleText = `
As can be seen between these different profiled box elements, even though these are labeled underneath the same element, 
these elements have quite different design when compared with each other. This is done purposely in order to create a variety in 
design for both visual experience but most crucially to make it very easy for users to quickly distinguish the different 
type of content that these profiled boxes offer. 
`;

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
	}, {
		title: 'Begrunnelse',
		path: '/begrunnelse',
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
<ProfileBox 
	link=" "
	text="Explaining text about something."
	title="This is a title link"
/> 
`;

const codeHtml = `
<div class="ssb-profile-box">
    <a class="ssb-link header" href=" " target="" rel="">
        <span class="link-text">This is a title link</span>
    </a>
    <p class="ssb-paragraph ">Explaining text about something.</p>
</div>
`;

const ProfileBoxInfo = () => {
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
			<Title size={1}>Profiled box</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/oversikt' && (
				<div className="mt-3">
					<div className="row mt-3">
						<Title size={3} className="col-lg-12">Profiled box - Statistic</Title>
						<div className="col-lg-6">
							<p>{profileBoxStaticText}</p>
						</div>
						<div className="col-lg-6">
							<ProfileBox link=" " text="Explaining text about something." title="This is a title link" />
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

					<Divider />

					<div className="row col-lg-12 ">
						<Title size={3} className="mt-3">Props</Title>
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
									<td><code>link</code></td>
									<td>string</td>
									<td>Destination for navigation</td>
								</tr>
								<tr>
									<td><code>text</code></td>
									<td>string</td>
									<td>Renders text</td>
								</tr>
								<tr>
									<td><code>title</code></td>
									<td>string</td>
									<td>Link text</td>
								</tr>
							</tbody>
						</table>

						<Divider className="mt-3" />

						<div className="col-lg-3 mt-3">
							<Text>Depends on</Text>
							<ul>
								<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Paragraph" isExternal>Paragraph</Link></li>
								<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Link" isExternal>Link</Link></li>
							</ul>
						</div>
					</div>

				</div>
			)}
			{activeTab === '/begrunnelse' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Different designs</Title>
						<div className="col-lg-6">
							<p>{rationaleText}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfileBoxInfo;