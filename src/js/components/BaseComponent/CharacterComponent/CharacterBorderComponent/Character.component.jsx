import React, { useState } from 'react';
import CharacterModelComponent from '../CharacterModelComponent/CharacterModel.component';

const mystyle = {
    top: "400px",
    height: "23.5vh",
    position: "relative",
    width: "100vw"
  };

const CharacterComponent = () => {

    return (
        <div id="character-base" style={mystyle}>
            <CharacterModelComponent></CharacterModelComponent>
        </div>
    )
}

export default CharacterComponent;