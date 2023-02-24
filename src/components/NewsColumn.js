// import React from 'react'
import Nav from 'react-bootstrap/Nav' 
import Navbar from 'react-bootstrap/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
// import { ReactComponent as Logo1 } from './logo.png';
import React from 'react';
import logo from '../logo1.png';
// const logo = require('./logo1.png'); 
 function Navigation(){
  return (
    <div >
      <Navbar bg="primary">
        <Navbar.Brand href="#home" style={{color:"white"}}>
        {/* <img src={require('./logo1.png')} /> */}
        <img src={logo} width="50" height="50" style={{marginBlockStart:13}} alt={logo} />
            </Navbar.Brand> 
          <Nav className>
          <Nav.Link href="#link1" style={{color:"white"}}>Home</Nav.Link> 
          <Nav.Link href="#link2" style={{color:"white"}}>Blogs</Nav.Link>
          </Nav> 
        </Navbar>
    </div>
    ); 
  }
export default Navigation;
  
