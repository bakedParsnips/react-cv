import * as ACTIONS from '../actions/actions';
import OutputConsoleText from '../components/BaseComponent/ConsoleComponent/consoleText';

const initialState = {
    consoleText: OutputConsoleText, 
};

function mainReducer(state = initialState, action) {
    if (action.type === ACTIONS.ADD_ARTICLE) {
        return Object.assign({}, state, {
            consoleText: state.consoleText.concat(action.payload)
        });
    }
    return state;
};

export default mainReducer;