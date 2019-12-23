import { all } from 'redux-saga/effects';
import getMoviesSaga from '..GetMoviesSaga/getMoviesSaga';
import postMoviesSaga from '..PostMoviesSaga/postMoviesSaga';

function* rootSaga() {
    console.log('In rootSaga');
    yield all(
        [
            getGenresSaga(),
            getMoviesSaga(),
            postMoviesSaga(),
        ]
    );
}

export default rootSaga;