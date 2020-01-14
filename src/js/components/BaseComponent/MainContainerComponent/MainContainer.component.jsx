import React, { useState } from 'react';
import GameWindowContainer from '../GameWindowComponent/GameWindow.component';
import ConsoleComponent from '../ConsoleComponent/Console.component';
import './mainContainer.css';

const MainContainerComponent = () => {
    return (
        <div id="main-container">
            <GameWindowContainer></GameWindowContainer>
            <ConsoleComponent></ConsoleComponent>
        </div>
    )
}

export default MainContainerComponent;