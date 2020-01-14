import React, { useState } from 'react';
import CharacterComponent from '../CharacterComponent/CharacterBorderComponent/Character.component';

import './gameWindow.css';

const GameWindowComponent = () => {
    return (
        <div id="game-window-container">
            <CharacterComponent></CharacterComponent>
        </div>
    )
}

export default GameWindowComponent;