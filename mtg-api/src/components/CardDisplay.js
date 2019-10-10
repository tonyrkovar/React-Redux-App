import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Card } from './Card'

import { fetchSets } from '../actions'

const CardDisplay = props => {
    console.log('props in card display', props)
    useEffect(() => {
        props.fetchSets();
    }, [])

    if (props.isFetching) {
        return <h2> LOADING</h2>
    } else {
        return (
            <div>
                {props.setData.sets.map(set => {
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
    // console.log('MSTP state', state)
    return {
        setData: state.setData,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchSets }
)(CardDisplay)