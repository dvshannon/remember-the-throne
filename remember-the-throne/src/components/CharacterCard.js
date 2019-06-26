import React from 'react';

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="image-container">
                <img alt={props.name} src={props.image} onClick={() => props.incrementCard(props.id)} className="incrementCard"/>
            </div>
        </div>
    )
}

export default CharacterCard;