import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
	const FOOTER_LINKS_CATEGORIES = {
		info: "info",
		features: "features",
		tools: "tools",
		helpfulLinks: "helpful links",
		policies: "policies"
	};

	const footerLinks = {
		[FOOTER_LINKS_CATEGORIES.info]: [
			"About Us",
			"Support",
			"Blog",
			"Download Apps",
			"The Slack App",
			"Partnerships",
			"Affiliate Program"
		],
		[FOOTER_LINKS_CATEGORIES.features]: [
			"Invoicing",
			"Task Management",
			"Contracts",
			"Payments",
			"Recurring Payments",
			"Expense Tracking",
			"Reports",
			"Proposals",
			"Time Tracking"
		],
		[FOOTER_LINKS_CATEGORIES.tools]: [
			"Free Invoice Templates",
			"Free Invoice Generator",
			"Free Invoicing Guide",
			"Self Employment Tax Calculator",
			"Quarterly Tax Calculator",
			"Business Name Generator"
		],
		[FOOTER_LINKS_CATEGORIES.helpfulLinks]: [
			"Williams & Harricks",
			"Anywhere Workers",
			"Freshbooks Alternative",
			"Quickbooks Alternative",
			"Harvest Alternative",
			"Wave Apps Alternative",
			"Design DB"
		],
		[FOOTER_LINKS_CATEGORIES.policies]: ["Terms of Service", "Privacy Policy"]
	};

	return (
		<div className="footer">
			<div className="container">
				{Object.entries(footerLinks).map(([category, links]) => (
					<div className="footer-category" key={category}>
						<h4>{category}</h4>
						{links.map((link) => (
							<p key={link}>
								<Link>{link}</Link>
							</p>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Footer;
