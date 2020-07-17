import React, { Component } from 'react';
import { Row, Card } from 'react-bootstrap';
import Item from './Item';
import Main from './Main';
import RowOfItems from "./RowOfItems";
import CommentItem from './CommentItem';

class Details extends Component {
    state = {
       product: {},

    }
    url = "http://localhost:3457/products";

    componentDidMount = () => {
        console.log('props', this.props)
        Promise.all([
            fetch(this.url + '?category=' + this.props.match.params.category)
            .then((response) => response.json())
            .then((product) => this.setState({product: product}))
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
                   <img src={this.state.product.imageurl} alt='product img'></img>
                 </div>
                 <div className='col-sm-12 col-md-6 col-lg-6'>
                     <Card>
                         <Card.Body>
                    <Card.Title className='mb-5' style={{color: '#000'}}>{this.state.product.name}</Card.Title>
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