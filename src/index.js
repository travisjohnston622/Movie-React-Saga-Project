import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers/RootReducer/rootReducer';
import rootSaga from './redux/sagas/RootSaga/rootSaga';


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

console.log(process.env.NODE_ENV);
const middlewareList = process.env.NODE_ENV === 'development' ?
    [sagaMiddleware, logger] :
    [sagaMiddleware];

// Create one store that all components can use
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewareList),
)

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
registerServiceWorker();
