import React from 'react';

const KtkImage = props => {
    return (
        <img src={`${props.card.imageUrl}`}></img>
    )
}

export default KtkImage;