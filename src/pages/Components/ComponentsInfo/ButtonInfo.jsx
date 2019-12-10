import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Button, Divider, LeadParagraph, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import { Upload } from 'react-feather';

const tabItems = [
	{
		title: 'Oversikt',
		path: '/overview',
	}, {
		title: 'Begrunnelse',
		path: '/rationale',
	}, {
		title: 'Props',
		path: '/props',
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

const codeExamplePrimary = `
<Button primary>Primary button</Button>
<Button primary><ChevronDown size="18" />Primary icon</Button>
<Button negative primary>Primary button</Button>
<Button negative primary><ChevronDown size="18" />Primary icon</Button>
`;

const codeExamplePrimaryHtml = `
<button class="ssb-btn primary-btn">Primary button</button>
<button class="ssb-btn primary-btn">{insert icon}&nbsp;Primary icon</button>
<button class="ssb-btn negative primary-btn">Primary button</button>
<button class="ssb-btn negative primary-btn">{insert icon}&nbsp;Primary icon</button>
`;

const codeExampleSecondary = `
<Button>Secondary Button</Button>
<Button><ChevronDown size="18" />Secondary Icon</Button>
<Button negative>Secondary Button</Button>
<Button negative><ChevronDown size="18" />Secondary icon</Button>
`;

const codeExampleSecondaryHtml = `
<button class="ssb-btn">Secondary button</button>
<button class="ssb-btn">{insert icon}&nbsp;Secondary icon</button>
<button class="ssb-btn negative">Secondary button</button>
<button class="ssb-btn negative">{insert icon}&nbsp;Secondary icon</button>
`;

const codeExampleDisabled = `
<Button disabled primary>Disabled primary</Button>
<Button disabled primary><ChevronDown size="18" />Disabled icon</Button>
<Button disabled>Disabled secondary</Button>
<Button disabled><ChevronDown size="18" />Disabled Icon</Button>
<Button disabled negative primary>Disabled primary</Button>
<Button disabled negative primary><ChevronDown size="18" />Disabled icon</Button>
<Button disabled negative>Disabled secondary</Button>
<Button disabled negative><ChevronDown size="18" />Disabled icon</Button>
`;

const codeExampleDisabledHtml = `
<button class="ssb-btn primary-btn" disabled>Disabled primary</button>
<button class="ssb-btn primary-btn" disabled>{insert icon}&nbsp;Disabled icon</button>
<button class="ssb-btn" disabled>Disabled secondary</button>
<button class="ssb-btn" disabled>{insert icon}&nbsp;Disabled Icon</button>
<button class="ssb-btn negative primary-btn" disabled>Disabled primary</button>
<button class="ssb-btn negative primary-btn" disabled>{insert icon}&nbsp;Disabled icon</button>
<button class="ssb-btn negative" disabled>Disabled secondary</button>
<button class="ssb-btn negative" disabled>{insert icon}&nbsp;Disabled icon</button>
`;

const ButtonInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Button</Title>
			<LeadParagraph>
				Knapper brukes for å fremheve og forenkle en handling. Knappens viktighet og funksjon avgjør hvilken versjon som skal benyttes.
				En knapp består av tekst, og av og til ikon, for å forklare hva som skjer når den blir klikket på. Teksten skal være så kort som mulig, og ikke gå over to linjer.
				Bruk lenke og ikke knapp til handlinger som tar brukeren til eksterne sider. Ved flervalg, bruk (om mulig) radio buttons eller check boxes.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/overview' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Primærknapp</Title>
						<div className="col-lg-6">
							<Paragraph>
								Primærknapp brukes til handlinger som er kritisk for brukerens videre fremdrift.
								Eksempel på en kritisk handling er «send inn» i et skjema eller «logg inn» i en innloggingstjeneste.
								En primærknapp bør kun brukes én gang per visning. Ikon brukes til å skille knapper fra hverandre, eller for å tydeliggjøre knappens funsjonalitet.
							</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Button primary>Primary Button</Button>
								<Button primary icon={<Upload size={18} />}>Primary Icon</Button>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper">
								<Button negative primary>Primary Button</Button>
								<Button negative primary icon={<Upload size={18} />}>Primary Icon</Button>
							</div>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExamplePrimary} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExamplePrimaryHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Sekundærknapp</Title>
						<div className="col-lg-6">
							<Paragraph>
								Sekundærknapp brukes for handlinger som er viktige, men ikke kritiske, for brukerens fremdrift.
								En sammenstilling av sekundærknapper indikerer likestilte handlinger, mens en sekundærknapp sammen men en primærknapp skaper hierarki.
								Ikon brukes til å skille knapper fra hverandre, eller for å tydeliggjøre knappens funsjonalitet.
							</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex justify-content-center mb-4 flex-wrap component-wrapper">
								<Button>Secondary button</Button>
								<Button icon={<Upload size={18} />}>Secondary icon</Button>
							</div>
							<div className="d-flex justify-content-center flex-wrap negative-wrapper px-0">
								<Button negative>Secondary button</Button>
								<Button negative icon={<Upload size={18} />}>Secondary icon</Button>
							</div>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExampleSecondary} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleSecondaryHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Ikke-aktiv knapp</Title>
						<div className="col-lg-6">
							<Paragraph>
								En passiv knapp skal kommunisere tydelig at den ikke har noen funksjon. Dette gjøres gjennom fravær av farge og kontrast.
								En passiv knapp kan ikke klikkes, og har heller ikke hover. Passive knapper er ikke underlagt kontrastkrav i UU.
							</Paragraph>
						</div>

						<div className="col-lg-12 d-flex flex-row">
							<div className="col-lg-6 d-flex justify-content-center component-wrapper ml-0">
								<Button primary disabled>Disabled primary</Button>
								<Button primary disabled icon={<Upload size={18} />}>Disabled icon</Button>
							</div>
							<div className="col-lg-6 d-flex justify-content-center component-wrapper ml-1">
								<Button disabled>Disabled secondary</Button>
								<Button disabled icon={<Upload size={18} />}>Disabled icon</Button>
							</div>
						</div>

						<div className="col-lg-12 d-flex flex-row">
							<div className="col-lg-6 d-flex justify-content-center negative-wrapper ml-0 p-0">
								<Button primary disabled negative>Disabled primary</Button>
								<Button primary disabled icon={<Upload size={18} />} negative>Disabled icon</Button>
							</div>
							<div className="col-lg-6 d-flex justify-content-center negative-wrapper ml-1 p-0">
								<Button disabled negative>Disabled secondary</Button>
								<Button disabled icon={<Upload size={18} />} negative>Disabled icon</Button>
							</div>
						</div>

						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeExampleDisabled} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeExampleDisabledHtml} language="html" />}
						</div>
					</div>
				</div>
			)}

			{activeTab === '/rationale' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Avrundede hjørner</Title>
						<Paragraph className="col-lg-6">
							Bruk av lett avrundede hjørner er for å skape et mer åpent og vennlig uttrykk for ssb.no.
							Det skaper også en sterkere kontrast til de mer skarpe firkantede komponentene i biblioteket, og gjør at knappene blir egenartet og står mer frem.
						</Paragraph>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Fylt bakgrunn</Title>
						<Paragraph className="col-lg-6">
							For sekundærknapper er bakgrunnen på knappen alltid fylt. Dette er for å sikre at knappeteksten alltid har god kontrast og synlighet for brukeren.
							Plassering av sekundærknapper vil dermed bli mer fleksibelt, og de vil alltid tilfredsstille UU-kravene.
						</Paragraph>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Understrek ved hoved</Title>
						<Paragraph className="col-lg-6">
							Alle knappevarianter har understrek ved hover for å tilfredsstille WCAG 2.0-kravene.
						</Paragraph>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2} className="mt-4 mb-4">Props</Title>

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
								<td><code>children</code></td>
								<td>Required node</td>
								<td>Button text or/and icon</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>String</td>
								<td>Optional container class</td>
							</tr>
							<tr>
								<td><code>disabled</code></td>
								<td>bool</td>
								<td>Decides if the button is disabled</td>
							</tr>
							<tr>
								<td><code>icon</code></td>
								<td>node</td>
								<td>Renders an icon</td>
							</tr>
							<tr>
								<td><code>negative</code></td>
								<td>bool</td>
								<td>Changes design</td>
							</tr>
							<tr>
								<td><code>onClick</code></td>
								<td>function</td>
								<td>Callback for button click</td>
							</tr>
							<tr>
								<td><code>primary</code></td>
								<td>bool</td>
								<td>Changes style to represent a primary button</td>
							</tr>
							<tr>
								<td><code>type</code></td>
								<td>string</td>
								<td>
									Button type. Can be &apos;submit&apos;, &apos;reset&apos;, or &apos;button&apos;.
									Defaults to &apos;button&apos;.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default ButtonInfo;
