import React from "react";
import "./joinfiver.scss";
import CommonButton from "../CommonButton/CommonButton";

const JoinFiverr = () => {
	return (
		<div className="join-fiverr">
			<div className="container">
				<picture>
					<img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" />
				</picture>
				<div className="signup-text">
					<h1>
						Suddenly it's all so <i>doable.</i>
					</h1>
					<CommonButton label="Join Fiverr" type="primary" style={{ padding: "12px 24px" }} />
				</div>
			</div>
		</div>
	);
};

export default JoinFiverr;
