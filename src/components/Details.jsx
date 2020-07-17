import React, { Component } from 'react';
import { Row, Card } from 'react-bootstrap';
import Item from './Item';
import Main from './Main';
import RowOfItems from "./RowOfItems";
import CommentItem from './CommentItem';

class Details extends Component {
    state = {
       movie: {},

    }
    url = "http://www.omdbapi.com/?apikey=34fd8839";

    componentDidMount = () => {
        console.log('props', this.props.match.params.imdbID)
        Promise.all([
            fetch(this.url + '&i=' + this.props.match.params.imdbID)
            .then((response) => response.json())
            .then((movie) => this.setState({movie: movie}))
           ])
            .catch((err) => {
                console.log('An error occucred:', err);
            })
           
    }
    
   
    render () {
     
        return (
            <>           
            <div className='container mt-4'>
                <h5 style={{color: '#fff'}}>Details</h5>
             <Row>
                 <div className='col-sm-12 col-md-6 col-lg-6'>
                   <img src={this.state.movie.Poster} alt='movie img'></img>
                 </div>
                 <div className='col-sm-12 col-md-6 col-lg-6'>
                     <Card>
                         <Card.Body>
                    <Card.Title className='mb-5' style={{color: '#000'}}>{this.state.movie.Title}</Card.Title>
                    <CommentItem />
                            
                         </Card.Body>
                     </Card>
                 </div>
             </Row>
            </div>
           
            </>
        ) 
    }
    
}

export default Details;