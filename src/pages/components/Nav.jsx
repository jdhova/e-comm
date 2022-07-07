import React from 'react';
import {Link } from 'react-router-dom'
import { Container,Navbar } from 'react-bootstrap';
import { UserAuth } from '../../context/AuthContext';
import { Button } from 'bootstrap';

const Nav = () => {
  // const {user} = UserAuth()
  return (
    <div>
        <Navbar className='nav'>
        <Container className='navhome'>
            <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end"> 
            <Navbar.Text>
                <ul className='links'>
                  {/* {user.email ? <li><Button> Signout</Button> </li> : <li> <Link to="/Signin">Signin</Link></li>} */}
                  
                    <li> <Link to="/Signin">Signin</Link></li>
                    <li> <Link to="/Signout">Signout</Link></li>    
                </ul>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
       
    </div>
  )
}

export default Nav

