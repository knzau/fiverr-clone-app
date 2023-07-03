import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CatCard from "../../components/catCard/catCard";
import Slide from "../../components/slide/Slide";
import { cards } from "../../data";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Features from "../../components/features/Features";

const Home = () => {
	return (
		<div>
			<Featured />
			<TrustedBy />
			<Slide slidesToShow={5} arrowsScroll={5} prevArrow={<GrFormPrevious />} nextArrow={<GrFormNext />}>
				{cards.map((card) => (
					<CatCard key={card.id} {...card} />
				))}
			</Slide>
			<Features />
		</div>
	);
};

export default Home;
