import React from "react";
import "./Product.css";
import GradeIcon from "@material-ui/icons/Grade";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
function Product({ id,title, image, price, rating }) {
	//
	const [{ basket }, dispatch] = useStateValue();
	console.log("This is the basket  >>>", basket)
	const addToBasket = () => {
		//dispatch /shootaction(item into data layer)
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<span>{price}</span>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>
								<GradeIcon />
							</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />
			<Button onClick={addToBasket}>Add to cart</Button>
		</div>
	);
}

export default Product;
