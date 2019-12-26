import {
	START_FETCHING,
	FETCH_SUCCESS,
	FETCH_FAILURE,
	START_FETCHING_KTK,
	FETCH_SUCCESS_KTK,
	FETCH_FAILURE_KTK,
	SET_GET
} from "../actions";

const initialState = {
	setData: [],
	ktkData: [],
	specificSet: [],
	isFetching: true,
	error: ""
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isFetching: true,
				error: ""
			};
		case FETCH_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: "",
				setData: action.payload
			};
		case FETCH_FAILURE:
			return {
				...state,
				error: action.payload,
				isFetching: false
			};
		case START_FETCHING_KTK:
			return {
				...state,
				isFetching: true,
				error: ""
			};
		case FETCH_SUCCESS_KTK:
			return {
				...state,
				isFetching: false,
				error: "",
				ktkData: action.payload
			};
		case FETCH_FAILURE_KTK:
			return {
				...state,
				error: action.payload,
				isFetching: false
			};
		case SET_GET:
			return {
				...state,
				specificSet: action.payload,
				isFetching: false
			};
		default:
			return state;
	}
};
