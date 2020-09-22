import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { auth } from "./Firebase";
function Login() {
	//takes back user to home
	const history = useHistory();
	//manage the state of the signing
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		//firebase login
		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};
	const register = (e) => {
		e.preventDefault();
		//firebase registertion
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//after success registeration
				console.log(auth);
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG12.png"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h5>Sign In</h5>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						type="submit"
						onClick={signIn}
						className="login__signInButton"
					>
						Sign In
					</Button>
				</form>
				<p>
					By signing in you agree to our terms and conditions of sale
					,interests based on Ads
				</p>
				<Button
					type="submit"
					onClick={register}
					className="login__registerButton"
				>
					Create your Amazon account
				</Button>
			</div>
		</div>
	);
}

export default Login;
