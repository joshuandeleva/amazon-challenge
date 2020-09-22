import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";
function Header() {
	//dynamic adding to cart
	const [{ basket, user }, dispatch] = useStateValue();
	//handle signout
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div
						onClick={handleAuthentication}
						className="header__option"
					>
						<span className="header__option1">
							Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header__option2">
							{user ? "Sign Out" : "SignIn"}
						</span>
					</div>
				</Link>
				<Link to="/orders">
					<div className="header__option">
						<span className="header__option1">Returns</span>
						<span className="header__option2">Orders</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__option1">Your</span>
					<span className="header__option2">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionbasket">
						<ShoppingCartIcon />
						<span className="header__option2  header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
