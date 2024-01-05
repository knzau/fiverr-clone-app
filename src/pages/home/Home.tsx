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
import BusinessSoulutions from "../../components/BusinessSolutions/BusinessSolutions";
import Categories from "../../components/Categories/Categories";
import ProjectWork from "../../components/InspiringWork/ProjectWork";
import Footer from "../../components/Footer/Footer";

const Home = () => {
	const docRef = useRef();

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
			<Categories />
			<ProjectWork />
			<BusinessSoulutions />
			<JoinFiverr />
		</div>
	);
};

export default Home;
