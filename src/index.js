import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


//sagas
function* rootSaga() {
    yield takeLatest('GET_MOVIES', getMovies);
}

function* getMovies() {
    console.log('in function* getMovies');
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/movies'
        });
        yield put({
            type: 'SET_MOVIES',
            payload: response.data
        });
    } catch (err) {
        console.log('error fetching your movies:', err);
    }
}


//Reducers
    const movieListReducer = (state = [], action) => {
        switch (action.type) {
            case 'SET_MOVIES':
                return action.payload;
            default:
                return state;
        }
    }




// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

console.log(process.env.NODE_ENV);
const middlewareList = process.env.NODE_ENV === 'development' ?
    [sagaMiddleware, logger] :
    [sagaMiddleware];

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
    movieListReducer,
    }),
    applyMiddleware(...middlewareList),
)

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

    ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
        document.getElementById('root'));
registerServiceWorker();