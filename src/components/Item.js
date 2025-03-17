import React, { useState } from "react";

function Item({ name, category }) {
	const [cart, setIsInCart] = useState(true);

	const cartClass = cart ? "" : "in-cart" ;	
	const cartButtonText = cart ? "Add to Cart" : "Remove From Cart";

	function handleClick() {
		setIsInCart((isInCart) => !isInCart);
	}

	return (
		<li className={cartClass}>
		<span>{name}</span>
		<span className="category">{category}</span>
		<button className="add" onClick={() => handleClick()}>{cartButtonText}</button>
		</li>
	);
}

export default Item;
