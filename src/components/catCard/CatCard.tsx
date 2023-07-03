import React from "react";
import { Link } from "react-router-dom";
import "./catCard.scss";

interface catCardProps {
	title: string;
	desc: string;
	img: string;
}

const CatCard = ({ title, desc, img }: catCardProps) => {
	return (
		<Link to="/gigs?cat=design">
			<div className="cart-card">
				<span className="title">{title}</span>
				<span className="desc">{desc}</span>
				<img src={img} alt={title} />
			</div>
		</Link>
	);
};

export default CatCard;
