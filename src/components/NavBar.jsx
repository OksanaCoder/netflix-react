import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus , faCartArrowDown} from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {

    return (
 <Navbar expand="lg" className='nav-color'>

  <Navbar.Brand>
      <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' style={{width: '100px', height: '50px', padding: '10px'}}/>
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto">
      <Link to='/' 
         
            className={
                props.location.pathname === '/'
                  ? "nav-link active"
                  : "nav-link"
            }
            className='text-white mr-4'
                  >Home</Link>
      <Link to="/comments" 
                 className={
                props.location.pathname === '/comments'
                  ? "nav-link active"
                  : "nav-link"}
                  className='text-white mr-4'>Reviews</Link>
      <Link to='/registration'
      className={
        props.location.pathname === '/registration'
        ? 'nav-link active'
        : 'nav-link' }
        className='text-white mr-4'>Registration</Link>
      
      <Link to='/login'
      className={
        props.location.pathname === '/login'
        ? 'nav-link active'
        : 'nav-link' }
        className='text-white'>Log in</Link>
      }            
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2 searchTerm" />
      <Button variant="link" style={{color: '#000', background: '#fff', borderRadius: '50%', padding:'3px 5px' }}>Go</Button>
    </Form>

    <Form inline className='ml-5'>
    
      <Link to='/cart' 
      className= {
        props.location.pathname === '/cart'
      ? 'nav-link active'
      : 'nav-link' }
      style={{background: 'none', border: 'none'}}> <FontAwesomeIcon icon={faCartArrowDown} style={{color: '#fff', fontSize: '20px'}}/> </Link>
    </Form>
  </Navbar.Collapse>
</Navbar>
  
    )
}

export default withRouter(NavBar);