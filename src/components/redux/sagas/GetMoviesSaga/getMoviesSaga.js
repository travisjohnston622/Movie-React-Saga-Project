import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

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

function* getMoviesSaga() {
    yield takeLatest('GET_MOVIES', getMovies);
}

export default getMoviesSaga;