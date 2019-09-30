import React from 'react';
import PropTypes from 'prop-types';
import Button from '@atoms/Button/Button';
import { ArrowUp } from 'react-feather';

const Footer = ({
	children, link, logo, scrollToTop, slogan, socialLinks,
}) => (
	<div className="footer-wrapper">
		<div className="footer-grid-content">
			<div className="d-flex flex-column justify-content-between">
				<div>
					<img className="logo" src={logo} alt="logo" />
					<p>
						{slogan && slogan}
					</p>
				</div>
			</div>
			<div>{children}</div>
		</div>
		<div className="d-flex flex-row justify-content-between">
			{link && link}
			<div className="social-links">
				{socialLinks && socialLinks.map(so => (
					<a
						className="social-navigation"
						href={so.link}
						key={so.link}
						rel="noopener noreferrer"
						target="_blank"
					>{so.logo}
					</a>
				))}
			</div>
		</div>
		{scrollToTop && (
			<div className="scroll-to-top">
				<Button
					onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
					text="Til toppen"
					icon={<ArrowUp />}
				/>
			</div>
		)}
	</div>
);

Footer.defaultProps = {};

Footer.propTypes = {
	children: PropTypes.node,
	link: PropTypes.node,
	logo: PropTypes.node,
	scrollToTop: PropTypes.bool,
	slogan: PropTypes.string,
	socialLinks: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			logo: PropTypes.node,
		}),
	),
};

export default Footer;