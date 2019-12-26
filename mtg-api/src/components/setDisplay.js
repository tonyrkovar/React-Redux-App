import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { specificSet } from "../actions";
import { Card } from "./Card";
import ktkImage from "./ktkImage";

const SetDisplay = props => {
	const setSelector = useSelector(state => state.specificSet);
	const selectLoading = useSelector(state => state.isFetching);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(specificSet(props.match.params.code));
	}, []);
	console.log("props in setDisplay component", setSelector);

	if (selectLoading) {
		return <h2> LOADING</h2>;
	} else {
		return (
			<div>
				{setSelector.map(card => {
					return <img src={`${card.imageUrl}`}></img>;
				})}
			</div>
		);
	}
};

export default SetDisplay;
