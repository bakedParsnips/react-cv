import React, { useState } from 'react';

const mystyle = {
    backgroundColor: "DodgerBlue",
    height: "10px",
    width: "10px"
  };

const CharacterComponent = () => {

    return (
        <div id="character-base" style={mystyle}></div>
    )
}

export default CharacterComponent;