import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { matchPath, Route, Switch, withRouter } from 'react-router-dom';
import { Paragraph, Title } from '@statisticsnorway/ssb-component-library';
import TreeMenu from '@components/TreeMenu/TreeMenu';
import AccordionInfo from './ComponentsInfo/AccordionInfo';
import BlockContentInfo from './ComponentsInfo/BlockContentInfo';
import BreadcrumbInfo from './ComponentsInfo/BreadcrumbInfo';
import ButtonInfo from './ComponentsInfo/ButtonInfo';
import CheckboxInfo from './ComponentsInfo/CheckboxInfo';
import DialogInfo from './ComponentsInfo/DialogInfo';
import DividerInfo from './ComponentsInfo/DividerInfo';
import DropdownInfo from './ComponentsInfo/DropdownInfo';
import FactBoxInfo from './ComponentsInfo/FactBoxInfo';
import FormErrorInfo from './ComponentsInfo/FormErrorInfo';
import InputInfo from './ComponentsInfo/InputInfo';
import KeyFiguresInfo from './ComponentsInfo/KeyFiguresInfo';
import LinksInfo from './ComponentsInfo/LinksInfo';
import PaginationInfo from './ComponentsInfo/PaginationInfo';
import ProfileBoxInfo from './ComponentsInfo/ProfileBoxInfo';
import RadioButtonInfo from './ComponentsInfo/RadioButtonInfo';
import ReferenceInfo from './ComponentsInfo/ReferenceInfo';
import SearchBoxInfo from './ComponentsInfo/SearchBoxInfo';
import TabsInfo from './ComponentsInfo/TabsInfo';
import TypographyInfo from './ComponentsInfo/TypographyInfo';
import WordExplanationInfo from './ComponentsInfo/WordExplanationInfo';
import QuotesInfo from './ComponentsInfo/QuotesInfo';

const sidebarItems = [
	{
		label: 'Accordion',
		path: '/accordion',
	}, {
		label: 'Block Content',
		path: '/block-content',
	}, {
		label: 'Breadcrumb',
		path: '/breadcrumb',
	}, {
		label: 'Button',
		path: '/button',
	}, {
		label: 'Dialog',
		path: '/dialog',
	}, {
		label: 'Divider',
		path: '/divider',
	}, {
		label: 'Input',
		path: '/input',
	}, {
		label: 'Fact Box',
		path: '/fact-box',
	}, {
		label: 'Form Error',
		path: '/form-error',
	}, {
		label: 'Key Figures',
		path: '/key-figures',
	}, {
		label: 'Links',
		path: '/links',
	}, {
		label: 'Pagination',
		path: '/pagination',
	}, {
		label: 'Profile Box',
		path: '/profile-box',
	}, {
		label: 'Checkbox',
		path: '/checkbox',
	}, {
		label: 'Dropdown',
		path: '/dropdown',
	}, {
		label: 'Radio Buttons',
		path: '/radiobutton',
	}, {
		label: 'Quotes',
		path: '/quotes',
	}, {
		label: 'Reference',
		path: '/reference',
	}, {
		label: 'SearchBox',
		path: '/search-box',
	}, {
		label: 'Tabs',
		path: '/tabs',
	}, {
		label: 'Typography',
		path: '/typography',
	},
	{
		label: 'Word Explanation',
		path: '/word-explanation',
	},
];

sidebarItems.sort((a, b) => ((a.label > b.label) ? 1 : -1));

const Components = withRouter(({ history, match }) => {
	const selectedComponent = matchPath(history.location.pathname, { path: '/components/:component' });
	const [activeMenuItem, changeMenuItem] = useState(`/${selectedComponent ? selectedComponent.params.component : ''}`);
	const navigate = e => {
		history.push(match.url + e);
		changeMenuItem(e);
	};

	return (
		<div className="components page-wrapper">
			<aside>
				<TreeMenu
					activeItem={activeMenuItem}
					items={sidebarItems.sort((a, b) => a.label - b.label)}
					match={match}
					onSelect={navigate}
				/>
			</aside>
			<section className="container-fluid">
				<Switch>
					<Route exact path={match.url}>
						<div className="row">
							<Title size={2} className="col-lg-12">Komponenter</Title>
							<div className="col-lg-12">
								<Paragraph>En oversikt over hvilke elementer (komponenter) som er tilgjengelige i designsystemet.</Paragraph>
							</div>
						</div>
					</Route>
					<Route path={`${match.url}/accordion`} component={AccordionInfo} />
					<Route path={`${match.url}/block-content`} component={BlockContentInfo} />
					<Route path={`${match.url}/breadcrumb`} component={BreadcrumbInfo} />
					<Route path={`${match.url}/button`} component={ButtonInfo} />
					<Route path={`${match.url}/dialog`} component={DialogInfo} />
					<Route path={`${match.url}/divider`} component={DividerInfo} />
					<Route path={`${match.url}/input`} component={InputInfo} />
					<Route path={`${match.url}/fact-box`} component={FactBoxInfo} />
					<Route path={`${match.url}/form-error`} component={FormErrorInfo} />
					<Route path={`${match.url}/key-figures`} component={KeyFiguresInfo} />
					<Route path={`${match.url}/links`} component={LinksInfo} />
					<Route path={`${match.url}/checkbox`} component={CheckboxInfo} />
					<Route path={`${match.url}/pagination`} component={PaginationInfo} />
					<Route path={`${match.url}/profile-box`} component={ProfileBoxInfo} />
					<Route path={`${match.url}/dropdown`} component={DropdownInfo} />
					<Route path={`${match.url}/quotes`} component={QuotesInfo} />
					<Route path={`${match.url}/radiobutton`} component={RadioButtonInfo} />
					<Route path={`${match.url}/reference`} component={ReferenceInfo} />
					<Route path={`${match.url}/search-box`} component={SearchBoxInfo} />
					<Route path={`${match.url}/tabs`} component={TabsInfo} />
					<Route path={`${match.url}/typography`} component={TypographyInfo} />
					<Route path={`${match.url}/word-explanation`} component={WordExplanationInfo} />
				</Switch>
			</section>
		</div>
	);
});

Components.defaultProps = {};

Components.propTypes = {
	match: PropTypes.object,
};

export default Components;
