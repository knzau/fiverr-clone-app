import React from "react";
import "./Features.scss";

const Features = () => {
	return (
		<div className="features">
			<div className="container">
				<div className="item">
					<h1>A whole world of freelance talent at your fingertips</h1>
					<div className="title">
						<img src="./images/check.png" alt="" />
						<span>The best for every budget</span>
					</div>
					<p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
					<div className="title">
						<img src="./images/check.png" alt="" />
						<span>Get quality work done quickly</span>
					</div>
					<p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
					<div className="title">
						<img src="./images/check.png" alt="" />
						<span>Pay when you're happy</span>
					</div>
					<p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
					<div className="title">
						<img src="./images/check.png" alt="" />
						<span>Count on 24/7 support</span>
					</div>
					<p>Our round-the-clock support team is available to help anytime, anywhere.</p>
				</div>
				<div className="item">
					<video
						src="https://res.cloudinary.com/dwtaiai3t/video/upload/v1688347641/fiver-video_ch0zf3.mp4"
						controls
					></video>
				</div>
			</div>
		</div>
	);
};

export default Features;
