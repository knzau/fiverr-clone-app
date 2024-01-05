import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Slide from "../slide/Slide";
import { sliderResponsiveSettings } from "../../pages/home/homeUtils";

import { ProjectInfoData } from "./projectInfo.utils";
import ProjectCard from "./ProjectCard";
import "./ProjectWork.scss";

const ProjectWork = () => {
	return (
		<div className="project-work">
			<div className="container">
				<h2>Inspiring work made on Fiverr</h2>

				<Slide
					className="project-slider"
					slidesToShow={4}
					slidesToScroll={1}
					prevArrow={<GrFormPrevious />}
					nextArrow={<GrFormNext />}
					responsive={sliderResponsiveSettings}
				>
					{ProjectInfoData.map((projectInfo) => (
						<ProjectCard key={projectInfo.id} projectInfo={projectInfo} />
					))}
				</Slide>
			</div>
		</div>
	);
};

export default ProjectWork;
