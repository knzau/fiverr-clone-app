import React from "react";
// import Slider from "infinite-react-carousel";
import Slider from "react-slick";
import "./Slide.scss";

const Slide = ({ children, slidesToShow, arrowsScroll, prevArrow, nextArrow, className, ...props }) => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="slide">
			<div className="container">
				<Slider
					className={className}
					slidesToShow={slidesToShow}
					arrowsScroll={arrowsScroll}
					prevArrow={prevArrow}
					nextArrow={nextArrow}
					{...props}
				>
					{children}
				</Slider>
			</div>
		</div>
	);
};

export default Slide;
