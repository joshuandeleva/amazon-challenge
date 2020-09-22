import React from "react";
import "./CheckoutProduct.css";
import GradeIcon from "@material-ui/icons/Grade";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, title, price, rating ,hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    //remove item from cart
    const removeFromBasket = () => {
        //remove
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,

        })
    }
    
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="CheckoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>
								<GradeIcon />
							</p>
						))}
				</div>
				{!hideButton && (
					<Button onClick={removeFromBasket}>Remove from  Cart</Button>
					)}
			</div>
		</div>
	);
}

export default CheckoutProduct;
