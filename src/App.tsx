import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";
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
					element: <Home />
				},
				{
					path: "/gigs",
					element: <Gigs />
				},
				{
					path: "/gig",
					element: <Gig />
				},
				{
					path: "/add",
					element: <Add />
				},
				{
					path: "/login",
					element: <Login />
				},
				{
					path: "/messages",
					element: <Messages />
				},
				{
					path: "/message",
					element: <Message />
				},
				{
					path: "/orders",
					element: <Orders />
				},
				{
					path: "/register",
					element: <Register />
				}
			]
		}
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
