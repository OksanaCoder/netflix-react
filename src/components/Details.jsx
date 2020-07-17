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
        console.log('props', this.props.match.params.id)
        Promise.all([
            fetch(this.url + '/' + this.props.match.params.id)
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
                   <img style={{width: '200px', height: '400px', borderRadius: '10px'}} src={this.state.product.imageurl} alt='product img'></img>

                   <Card.Title style={{color: '#fff'}}>{this.state.product.name}</Card.Title>
                    <Card.Title style={{color: '#fff'}}>Price: <small> $ {this.state.product.price}</small></Card.Title>
                    <Card.Title  style={{color: '#fff'}}>Category: <small>{this.state.product.category}</small></Card.Title>
                  
                 </div>
                 <div className='col-sm-12 col-md-6 col-lg-6'>
                     <Card>
                         <Card.Body>
                
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