import React from "react";
import "./commonbutton.scss";

const CommonButton = ({ label, type, variant, otherProps }) => {
	return (
		<button
			className={`common-button ${
				(type === "secondary" && !variant && "secondaryBtn") || (type === "primary" && "primaryBtn") || variant
			} `}
			{...otherProps}
		>
			<span>{label}</span>
		</button>
	);
};

export default CommonButton;
