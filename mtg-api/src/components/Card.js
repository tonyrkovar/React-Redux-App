import React from 'react';

export const Card = ({ set }) => {
    return (
        <div className='set-card'>
            <h2>Set Name:<br />{set.name}</h2>
            <p>Release Date: {set.releaseDate}</p>
            <p>Release Type: {set.type}</p>
        </div>
    )
}
