import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./routing/PrivateRoute";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route exact path="/" component={Landing} />
						<PrivateRoute exact path="/dashboard" component={Dashboard} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="" component={NotFound} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
