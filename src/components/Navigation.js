import Nav from 'react-bootstrap/Nav' 
import Navbar from 'react-bootstrap/Navbar'
import './Navigation.css';
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth0 } from "@auth0/auth0-react";
// import { ReactComponent as Logo1 } from './logo.png';
import React from 'react';
import logo from '../logo1.png';
// const logo = require('./logo1.png'); 
 const Navigation=()=>{
  const { loginWithRedirect } = useAuth0();
  const { logout,isLoading } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <div >
      <Navbar className="nav1" >
        <Navbar.Brand href="#home" style={{color:"white"}}>
       
        <img className="logo" src={logo} width="50" height="50" style={{marginBlockStart:13}} alt="hi" />
            </Navbar.Brand> 
            
    
 
          <Nav className='nav2'>
         {
          isAuthenticated? (
           <div className='flex-cont'> <ul >
          
          <li><h2>{user.name}</h2></li>
          
          <li>
          <Button
          variant="primary"
          className="ms-auto"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </Button></li>
        <li><img src={user.picture} alt={user.name} className="profilepic" />
       </li>  </ul> </div>  )
          :
          (<Button
              variant="primary"
              className="style-button"
              onClick={() => loginWithRedirect()}

            >
              Log In
            </Button>
            )
         }
          

            
          </Nav>
          {/* <div>
          isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
    </div> */}
    
        </Navbar>
       
    </div>
    ); 
  }
export default Navigation;
