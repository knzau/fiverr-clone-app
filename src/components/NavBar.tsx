import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const NavBar = () => {
	const [isActive, setIsActive] = useState(false);
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();

	const isVisible = () => {
		window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", isVisible);

		return () => {
			window.removeEventListener("scroll", isVisible);
		};
	}, []);

	const currentUser = {
		id: 1,
		username: "John Doe",
		isSeller: true,
	};

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
					{!currentUser && <button>Join</button>}
					{currentUser && (
						<div className="user" onClick={() => setOpen(!open)}>
							<img src="" alt="" />
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
