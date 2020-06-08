import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';
const NavBar = () => {

    return (
 <Navbar expand="lg" className='nav-color'>
  <Navbar.Brand href="#home">
      <img src='https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=3' style={{width: '100px', height: '50px'}}/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto">
      <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
      <Nav.Link href="#link" className='text-white'>Comments</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  
    )
}

export default NavBar