import React from 'react';

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="image-container">
                <img alt={props.name} src={props.image} onClick={() => props.handleIncrement(props.id)} className="incrementCard"/>
            </div>
        </div>
    )
}

export default CharacterCard;