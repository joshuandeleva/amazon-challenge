import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe("pk_test_51HTzXfB1WOKTZzj9jc24gsYbqxChli8zRM15Rj4d1ENmvoW3XRFYiZE8HxTupX9UzstJN3JE3dMkmHMwubMpNMxN00vfsL0qgv");
function App() {
	const [{}, dispatch] = useStateValue();

	//keep track of who is logged in
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("The user is >>>", authUser);
			if (authUser) {
				//user just logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				//user logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, [dispatch]);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
