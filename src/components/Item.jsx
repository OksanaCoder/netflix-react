import React, { Component } from 'react';
import { render } from '@testing-library/react';

class Item extends Component {
    render() {
        return(
            <div className='col-4'>
            <img
                className='img-fluid'
                src={this.props.data.Poster}
                alt="movie"
            />
            </div>
        )
    }
}


export default Item;