import React, { useState } from 'react';
import OutputConsoleText from './consoleText.js';
import './consoleComponent.css';
import { connect } from "react-redux";

const ConsoleComponent = ({articles}) => {

    const [textOutput, setTextOutput] = useState(OutputConsoleText.welcomeText.textString);

    return (
        <div>
            <div id="console-window"><div className="chat-animation">{textOutput}</div></div>
            <ul>
                {articles.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return { articles: state.articles }
};


export default connect(mapStateToProps)(ConsoleComponent);