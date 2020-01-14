import * as ACTIONS from '../actions/actions';

const initialState = {
    articles: []
};

function mainReducer(state = initialState, action) {
    if (action.type === ACTIONS.ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
};

export default mainReducer;