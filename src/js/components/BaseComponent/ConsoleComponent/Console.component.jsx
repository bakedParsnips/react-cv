import React, { useState } from 'react';
import OutputConsoleText from './consoleText.js';
import './consoleComponent.css';
import { connect } from "react-redux";

const ConsoleComponent = ({consoleText}) => {

    const [textOutput, setTextOutput] = useState(consoleText.welcomeText.textString);

    return (
        <div>
            <div id="console-window"><div className="chat-animation">{textOutput}</div></div>
        </div>
    )
}

const mapStateToProps = state => {
    return { consoleText: state.consoleText }
};


export default connect(mapStateToProps)(ConsoleComponent);