import React, { useState, useEffect } from 'react';
import './character-style.css';

import characterModelsList from './characterModels';

const CharacterModelComponent = () => {

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
    })

    const [activeModel, setActiveModel] = useState(characterModelsList.default.imageUrl);

    const myStyle = {
        backgroundImage: 'url(' + require(`${activeModel}`) + ')',
        width: '132px',
        margin: '0px',
        height: '210px',
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '132px',
        left: '960px',
        top: '39px'
    }

    const handleKeyPress = (event) => {
        if(event.keyCode === 37) {
            setActiveModel(characterModelsList.walking.imageUrl)
        }
    }

    return (
        <div id="character-model" style={myStyle}></div>
    )
}

export default CharacterModelComponent;