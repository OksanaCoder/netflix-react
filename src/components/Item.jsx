import React, { Component } from 'react';
import { render } from '@testing-library/react';

class Item extends Component {
    render() {
        return(
            <div className='col-sm-4 col-md-2 col-lg-2 mt-3' key={this.props.data.imdbID}>
            <img
                className='img-fluid item'
                src={this.props.data.Poster}
                alt="movie"
            />
            <h6 className='mt-1' style={{color: '#fff', fontSize: '10px'}}>{this.props.data.Title}</h6>
            </div>
        )
    }
}


export default Item;