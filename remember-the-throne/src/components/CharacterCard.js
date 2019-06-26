import React from 'react';

function CharacterCard(props) {
    return (
        <div className="card" value={props.id} key={props.id} onClick={() => props.handleClick(props.id)}>
            <div>
                <img alt={props.name} src={props.image} className="incrementCard"/>
            </div>
        </div>
    )
}

export default CharacterCard;