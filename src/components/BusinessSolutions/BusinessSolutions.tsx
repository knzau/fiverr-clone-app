import React from "react";
import "./BusinessSolutions.scss";
import CheckIcon from "../../assets/CheckIcon";
import BusinessSolutionLogo from "../../assets/BusinessSolutionLogo";
import CommonButton from "../CommonButton/CommonButton";

const BusinessSoulutions = () => {
	return (
		<div className="business-solutions">
			<div className="container">
				<div className="item">
					<span className="business-solutions__logo">
						<BusinessSolutionLogo />
					</span>

					<h2>Advanced solutions and professional talent for businesses</h2>
					<div className="sub-items">
						<div className="sub-item">
							<span>
								<CheckIcon />
							</span>
							<span>
								<h4>Fiver Pro</h4>
								<p>Access top freelancers and professional business tools for any project</p>
							</span>
						</div>
						<div className="sub-item">
							<span>
								<CheckIcon />
							</span>
							<span>
								<h4>Fiverr Certified</h4>
								<p>Build your own branded marketplace of certified experts</p>
							</span>
						</div>
						<div className="sub-item">
							<span>
								<CheckIcon />
							</span>
							<span>
								<h4>Fiverr Enterprise</h4>
								<p>
									Manage your freelance workforce and onboard additional talent with an end-to-end
									SaaS solution
								</p>
							</span>
						</div>
					</div>
					<CommonButton label="Learn more" type="secondary" style={{ padding: "12px 24px" }} />
				</div>
				<div className="item">
					<img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" />
				</div>
			</div>
		</div>
	);
};

export default BusinessSoulutions;
