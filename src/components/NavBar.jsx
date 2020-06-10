import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom'

const NavBar = (props) => {

    return (
 <Navbar expand="lg" className='nav-color'>

  <Navbar.Brand>
      <img src='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=3' style={{width: '100px', height: '50px'}}/>
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
                  className='text-white'>Comments</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  
    )
}

export default withRouter(NavBar);