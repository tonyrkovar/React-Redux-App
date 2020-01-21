import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";

import { fetchSetCards } from "../actions";
import KtkImage from "./ktkImage";

const SetCardsDisplay = props => {
	const ktkSelector = useSelector(state => state.ktkData);
	const selectLoading = useSelector(state => state.isFetching);
	console.log(props.ktkData);

	useEffect(() => {
		props.fetchSetCards();
	}, []);

	if (selectLoading) {
		return <h2>LOADING</h2>;
	}
	return (
		<div>
			{ktkSelector.cards.map(card => {
				return <KtkImage key={card.id} card={card} />;
			})}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		ktkData: state.ktkData
	};
};

export default connect(mapStateToProps, { fetchSetCards })(SetCardsDisplay);
