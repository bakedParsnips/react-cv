import React, { useState } from 'react';

const mystyle = {
    backgroundColor: "DodgerBlue",
    height: "10px",
    width: "10px"
  };

const CharacterComponent = () => {

    return (
        <div id="character-base" class="base12" style={mystyle}></div>
    )
}

export default CharacterComponent;