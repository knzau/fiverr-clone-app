import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import CommonButton from "./CommonButton/CommonButton";

const NavBar = () => {
	const [isActive, setIsActive] = useState(false);
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();

	const isVisible = useCallback(() => {
		window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", isVisible);

		return () => {
			window.removeEventListener("scroll", isVisible);
		};
	}, [isVisible]);

	const currentUser = {
		id: 1,
		username: "John Doe",
		isSeller: true,
	};
	console.log({ visible: isActive });

	return (
		<div className={isActive || pathname !== "/" ? "navbar active" : "navbar"}>
			<div className="container">
				<div className="logo">
					<Link to="/">
						<span className="text">fiverr</span>
						<span className="dot">.</span>
					</Link>
				</div>
				<div className="links">
					<span>Fiverr Business</span>
					<span>Explore</span>
					<span>English</span>
					<span>Sign in</span>
					<span>Become a Seller</span>
					{!currentUser?.isSeller && <span>Become a Seller</span>}
					{currentUser.id && (
						<CommonButton label="Join" type="secondary" variant={isActive ? "secondary-variant-2" : ""} />
					)}
					{!currentUser && (
						<div className="user" onClick={() => setOpen(!open)}>
							<img src="https://randomuser.me/api/portraits/men/28.jpg" alt="profile-pic" />
							<span> {currentUser?.username} </span>
							{open && (
								<div className="options">
									{currentUser?.isSeller && (
										<>
											<Link to="/jobs">Jobs</Link>
											<Link to="/add">Add new job</Link>
										</>
									)}
									<Link to="/orders">Orders</Link>
									<Link to="/messages">Messages</Link>
									<Link to="/">Logout</Link>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			{isActive ||
				(pathname !== "/" && (
					<>
						<hr />
						<div className="menu">
							<span>Test</span>
							<span>Test2</span>
						</div>
					</>
				))}
		</div>
	);
};

export default NavBar;
