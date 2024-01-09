import React from "react";

import { Link } from "react-router-dom";
import "./GigCard.scss";

const GigCard = ({ item }) => {
	return (
		<Link to="/gig/123" className="link">
			<div className="gig-card">
				<img src={item.img} alt="" />
				<div className="gig-info">
					<div className="user">
						<img src={item.pp} alt="" />
						<span> {item.username}</span>
					</div>
					<div className="star">
						<img src="./images/star.png" alt="" />
						<span>{item.star}</span>
					</div>
				</div>
				<hr />
				<div className="gig-details">
					<img src="./images/heart.png" alt=" " />
					<div>
						<span>STARTING AT</span>
						<h2>${item.price}</h2>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default GigCard;
