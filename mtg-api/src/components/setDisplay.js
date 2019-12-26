import React from "react";
import { useSelector, useDispatch } from "react-redux";

const setDisplay = props => {
	console.log(props);
	return (
		<div>
			<p>This is the set page</p>
		</div>
	);
};

export default setDisplay;
