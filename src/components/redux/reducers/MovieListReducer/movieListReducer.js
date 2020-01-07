// Used to store movies returned from the server

const movieListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}



export default movieListReducer;