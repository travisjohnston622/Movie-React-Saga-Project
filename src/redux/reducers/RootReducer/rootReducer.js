import { combineReducers } from 'redux';
import genresListReducer from '../GenresListReducer/genresListReducer';
import movieListReducer from '../MovieListReducer/movieListReducer';


const rootReducer = combineReducers({
    genresListReducer,
    movieListReducer,
    
})

export default rootReducer;
