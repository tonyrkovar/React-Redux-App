import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchSets = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
        .get('https://api.magicthegathering.io/v1/sets')
        .then(res =>
            dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}