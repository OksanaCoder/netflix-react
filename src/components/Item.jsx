import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { Link, withRouter } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import Main from './Main'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

class Item extends Component {
    render() {
        return (
            <>
              


                <div className='col-sm-4 col-md-2 col-lg-2 mt-3' key={this.props.data._id}>
                <Card style={{height: 'calc(100% - 10px)'}}>
                <Link to={'/details/' + this.props.data._id}

                ><Card.Img variant="top"
                        className='item'
                        style={{height: '200px', objectFit: 'cover', padding: '20px'}}
                        src={this.props.data.imageurl}
                        alt="item"
                    />
                </Link>
                 
                    <Card.Body style={{flexDirection: 'end'}}>
                        <Card.Title style={{fontSize: '15px'}}>{this.props.data.name}</Card.Title>
                        <Card.Text >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <small className='mt-1' style={{ color: '#000', fontSize: '15px' }}>$ {this.props.data.price}</small>
                        <button style={{ background: 'none', border: 'none' }}><FontAwesomeIcon icon={faCartPlus} style={{ color: '#000', fontSize: '15px' }} /></button>
                        </div>
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                </div>
            </>
        )
    }
}


export default withRouter(Item);