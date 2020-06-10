import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { Link, withRouter } from 'react-router-dom';
import Main from './Main'

class Item extends Component {
    render() {
        return(
            <>
            <div className='col-sm-4 col-md-2 col-lg-2 mt-3' key={this.props.data.imdbID}>
            <Link to={'/details/:' + this.props.data.imdbID}  
         
            ><img
                className='img-fluid item'
                src={this.props.data.Poster}
                alt="movie"
            />
            </Link>
            <h6 className='mt-1' style={{color: '#fff', fontSize: '10px'}}>{this.props.data.Title}</h6>
            </div>
           
            </>
        )
    }
}


export default withRouter(Item);