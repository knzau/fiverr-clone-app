import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";

const Slide = ({ children, slidesToShow, arrowsScroll, prevArrow, nextArrow }) => {
	return (
		<div className="slide">
			<div className="container">
				<Slider
					className="slider"
					slidesToShow={slidesToShow}
					arrowsScroll={arrowsScroll}
					prevArrow={prevArrow}
					nextArrow={nextArrow}
				>
					{children}
				</Slider>
			</div>
		</div>
	);
};

export default Slide;
