import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { callSet } from "../actions";

export const Card = ({ set }) => {
	const dispatch = useDispatch();
	console.log(set);
	return (
		<div className="set-card">
			<h2>
				Set Name:
				<br />
				{set.name}
			</h2>
			<p>Release Date: {set.releaseDate}</p>
			<p>Release Type: {set.type}</p>
			<Link to={`/set/${set.code}`}>
				<button onClick={() => dispatch(callSet)}> View {set.name}</button>
			</Link>
		</div>
	);
};
