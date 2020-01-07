import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import movieListReducer from '../../redux/reducers/MovieListReducer/movieListReducer';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_MOVIES',
        })
    }

    goToDetails = (event) => {
        // navigates to details page
        this.props.history.push('/details');
    }

    render() {
        return (
            <div>
                <h1>Movies Galore!!!</h1>
                <movieListReducer />
            </div>
        );
    }

}