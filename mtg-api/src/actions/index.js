import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const START_FETCHING_KTK = 'START_FETCHING_KTK';
export const FETCH_SUCCESS_KTK = 'FETCH_SUCCESS_KTK';
export const FETCH_FAILURE_KTK = 'FETCH_FAILURE_KTK';

export const fetchSets = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
        .get('https://api.magicthegathering.io/v1/sets')
        .then(res =>
            dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

export const fetchSetCards = () => dispatch => {
    dispatch({ type: START_FETCHING_KTK });
    console.log('KTK AXIOS')
    axios
        .get('https://api.magicthegathering.io/v1/cards')
        .then(res => {
            console.log('cards RES', res);
            dispatch({ type: FETCH_SUCCESS_KTK, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_FAILURE_KTK, payload: err.response }))
}

// export const callSet = props => dispatch => {
//     dispatch({ type: START_FETCHING });
//     axios
//         .get('https://api.magicthegathering.io/v1/sets/${props.key}')
//         .then(res =>
//             dispatch({ type: FETCH_SUCCESS, payload: res.data }))
//         .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
// }