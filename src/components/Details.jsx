import React, { Component } from 'react';
import { Row, Card } from 'react-bootstrap';
import Item from './Item';
import Main from './Main';
import RowOfItems from "./RowOfItems";

class Details extends Component {
    state = {
       movies: []
    }
    url = "http://www.omdbapi.com/?apikey=34fd8839";

    componentDidMount = () => {
        Promise.all([
            fetch(this.url + '&s=harry%20potter' + this.props.imdbID)
            .then((response) => response.json())
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
        <img alt='movie img'></img>
                 </div>
                 <div className='col-sm-12 col-md-6 col-lg-6'>
                     <Card>
                         <Card.Body>
            <Card.Title>{this.state.movies.Title}</Card.Title>
                             <form>
                                <label>
                                    Leave your comment:
                                    <input type="text" name="name" className="ml-2"/>
                                </label>
                                
                                
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                <label className="form-check-label" for="exampleRadios1">
                                    Perfect !
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                <label className="form-check-label" for="exampleRadios2">
                                    Cool but could be better
                                </label>
                                </div>
                                <div className="form-check disabled">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
                                <label className="form-check-label" for="exampleRadios3">
                                    Dull 
                                </label>
                                </div>
                                <input type="submit" value="Send" className="mt-3"/>
                              </form>
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