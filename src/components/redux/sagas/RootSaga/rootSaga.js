import { all } from 'redux-saga/effects';
import getMoviesSaga from '..GetMoviesSaga/getMoviesSaga';
import putMoviesSaga from '..PutMoviesSaga/putMoviesSaga';

function* rootSaga() {
    console.log('In rootSaga');
    yield all(
        [
            getMoviesSaga(),
            putMoviesSaga(),
        ]
    );
}

export default rootSaga;