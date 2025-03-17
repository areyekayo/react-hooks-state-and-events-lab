import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
	const [appMode, setAppMode] = useState(false)
	// replace 'false' with a state variable that can be toggled between true and false
	// this will be used for the Dark Mode Toggle feature
	const appClass = appMode ? "App dark" : "App light"
	const toggleText = appMode ? "Dark Mode" : "Light Mode"

	function handleModeClick() {
		setAppMode((appMode) => !appMode);
	}

	return (
		<div className={appClass}>
		<header>
			<h2>Shopster</h2>
			<button onClick={() => handleModeClick()}>{toggleText}</button>
		</header>
		<ShoppingList items={itemData} />
		</div>
	);
}

export default App;
