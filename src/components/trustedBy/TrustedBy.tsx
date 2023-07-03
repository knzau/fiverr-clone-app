import React from "react";
import "./TrustedBy.scss";

const TrustedBy = () => {
	const trustedCompanies = [
		{
			name: "meta",
			url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png",
		},
		{
			name: "google",
			url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png",
		},
		{
			name: "netflix",
			url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png",
		},
		{
			name: "pandg",
			url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png",
		},
		{
			name: "paypal",
			url: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png",
		},
	];
	return (
		<div className="trusted-by">
			<div className="container">
				<span>Trusted by:</span>
				{trustedCompanies.map((company) => (
					<div key={crypto.randomUUID()} className="img-wrapper">
						<img src={company.url} alt={company.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default TrustedBy;
