import React, { useEffect } from 'react';
import { connect, useSelector, shallowEqual } from 'react-redux';

import { Card } from './Card'

import { fetchSets } from '../actions'

const CardDisplay = props => {
    const dataSelector = useSelector(state => state.setData, shallowEqual)
    const selectLoading = useSelector(state => state.isFetching)
    console.log('props in card display', dataSelector)
    useEffect(() => {
        props.fetchSets();
    }, [])

    if (selectLoading) {
        return <h2> LOADING</h2>
    } else {
        return (
            <div>
                {dataSelector.sets.map(set => {
                    return (
                        <Card key={set.code} set={set} />
                    )
                })}
                <p>test</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(
    mapStateToProps,
    { fetchSets }
)(CardDisplay)