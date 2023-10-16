import React, { useRef } from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import CatCard from "../../components/catCard/catCard";
import Slide from "../../components/slide/Slide";
import { cards } from "../../data";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Features from "../../components/features/Features";
import JoinFiverr from "../../components/JoinFiverr/JoinFiverr";
import { sliderResponsiveSettings } from "./homeUtils";

const Home = () => {
	const docRef = useRef();

	console.log({ width: docRef.current?.offsetWidth });

	return (
		<div ref={docRef}>
			<Featured />
			<TrustedBy />
			<Slide
				className="home-slider"
				slidesToShow={5}
				slidesToScroll={1}
				prevArrow={<GrFormPrevious />}
				nextArrow={<GrFormNext />}
				responsive={sliderResponsiveSettings}
			>
				{cards.map((card) => (
					<CatCard key={card.id} {...card} />
				))}
			</Slide>
			<Features />
			<JoinFiverr />
		</div>
	);
};

export default Home;
