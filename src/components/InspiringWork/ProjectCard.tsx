import React from "react";

const ProjectCard = ({ projectInfo }) => {
	const { projectImage, sellerImage, gigInfoText, gigInfoSeller } = projectInfo;
	return (
		<div className="project-card">
			<div className="project-image_box">
				<img className="project-image" src={projectImage} alt="project-img" />
			</div>

			<div className="project-info">
				<span className="seller-image_box">
					<img className="seller-image" src={sellerImage} alt="img-seller" />
				</span>
				<span className="gig-info">
					<h5>{gigInfoText}</h5>
					<a href="#">{gigInfoSeller}</a>
				</span>
			</div>
		</div>
	);
};

export default ProjectCard;
