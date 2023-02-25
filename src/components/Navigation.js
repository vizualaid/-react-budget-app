// import React from 'react'
import Nav from 'react-bootstrap/Nav' 
import Navbar from 'react-bootstrap/Navbar'
import './Navigation.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import { ReactComponent as Logo1 } from './logo.png';
import React, { Component } from 'react';
import logo from '../logo1.png';
// const logo = require('./logo1.png'); 
 function Navigation(){
  return (
    <div className="navmain" >
      <Navbar className="nav" >
        <Navbar.Brand href="#home" style={{color:"white"}}>
        {/* <img src={require('./logo1.png')} /> */}
        <img className="logo" src={logo} width="50" height="50" style={{marginBlockStart:13}} alt="hi" />
            </Navbar.Brand> 
          <Nav className>
          <Nav.Link href="#link1" style={{color:"black"}}>Home</Nav.Link> 
          <Nav.Link href="#linkto" style={{color:"black"}}>News</Nav.Link>
          </Nav> 
        </Navbar>
    </div>
    ); 
  }
export default Navigation;
