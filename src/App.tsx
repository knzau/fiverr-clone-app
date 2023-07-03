import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
import Jobs from "./pages/jobs/Jobs";
import Job from "./pages/job/Job";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";


function App() {
	const Layout = () => {
		return (
			<div className="app">
				<NavBar />
				<Outlet />
				<Footer />
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/jobs",
					element: <Jobs />,
				},
				{
					path: "/job",
					element: <Job />,
				},
				{
					path: "/add",
					element: <Add />,
				},
				{
					path: "/login",
					element: <Login />,
				},
				{
					path: "/messages",
					element: <Messages />,
				},
				{
					path: "/message",
					element: <Message />,
				},
				{
					path: "/orders",
					element: <Orders />,
				},
				{
					path: "/register",
					element: <Register />,
				},
			],
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
