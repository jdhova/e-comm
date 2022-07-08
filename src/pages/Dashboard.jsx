import { Button } from 'react-bootstrap';
import React,{useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const { logOut, user } = UserAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
      try {
        await logOut();
        navigate('/home');
      } catch (error) {
        console.log(error);
      }
    };
    

   


  return (
  
      <>
     <h2>Dash</h2>
    <div>welcome {user.displayName}</div>
    <Button onClick={handleSignOut}>Logout</Button>
    </>
  )
}

export default Dashboard