import { createStore } from "redux";
import rootReducer from '../reducers/main-reducer';

const store = createStore(rootReducer);

export default store;