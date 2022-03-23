import React from 'react';
import axios from 'axios';
import './SpaceClassList.css';

function SpaceClassListItem(props) {
    return (
        <span id='wrap'>
            <img src={props.space.spacePhoto}/>
            <span id='SpaceCard'>
                <p id='title'>{props.space.spaceTitle}</p>
                <p id='area'>{props.space.spaceArea}</p>
                <button class='fixBtn'>수정</button>
            </span>
        </span>
    );
}

export default SpaceClassListItem;