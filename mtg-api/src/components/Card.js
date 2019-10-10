import React from 'react';

export const Card = props => {
    return (
        <div className='set-card'>
            <h2>Set Name:<br />{props.set.name}</h2>
            <p>Release Date: {props.set.releaseDate}</p>
            <p>Release Type: {props.set.type}</p>
        </div>
    )
}
