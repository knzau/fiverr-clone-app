import React from "react";
import "./Categories.scss";
import { categoryGroups } from "./categories.utils";

const Categories = () => {
	return (
		<div className="categories">
			<div className="container">
				<h2>You need it, we've got it</h2>

				<div className="category-groups">
					{categoryGroups.map((categoryGroup) => (
						<div className="category-item">
							<img src={categoryGroup.src} />
							<span>{categoryGroup.title}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Categories;
