import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './js/redux-store/store';
import * as serviceWorker from './serviceWorker';

import MainContainerComponent from './js/components/BaseComponent/MainContainerComponent/MainContainer.component';

ReactDOM.render(<Provider store={store}><MainContainerComponent /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
