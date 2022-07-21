import React from 'react';
import {Link } from 'react-router-dom'
import { Container,Navbar } from 'react-bootstrap';
import { UserAuth } from '../../context/AuthContext';
import { Button } from 'react-bootstrap';

const Nav = () => {
  const {user,logOut} = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='navmain'>
        <Navbar className='nav'>
        <Container className='navhome'>
            <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end"> 
            <Navbar.Text>
                <ul className='nav'>
                {user?.email ? (
                      <Button onClick={handleSignOut}>Logout</Button>
                    ) : (
                      <Link to='/signin'>Sign in</Link>
                    )}

                </ul>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
       
    </div>
  )
}

export default Nav

