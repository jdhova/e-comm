import { Button } from 'react-bootstrap';
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
    

    const today= new Date().toLocaleString('en-GB')

    const time = new Date().toLocaleTimeString();

    function check() {
        if (time   < 0 && time > 12  ){
            return <div>morning </div>
        }
        if (time   < 12.01 && time > 18.00  ) {
            return <div>Afternoon </div>
        }

        if (time   < 18.01 && time > 23.49  )
        return <div>Evening </div>
    }

    // const  check = () => {
    //     if (time   < 0 && time > 12  ){
    //         return <div>morning </div>
    //     }
    //     if (time   < 12.01 && time > 18.00  ) {
    //         return <div>Afternoon </div>
    //     }

    //     if (time   < 18.01 && time > 23.49  )
    //     return <div>Evening </div>
    // }

        

  return (
    
      <>
     <h3> Welcome to {user.displayName}s'Dash Board</h3>
        Good Day 
        <br></br>
         {user.displayName}  its {today}{check()}
    <Button onClick={handleSignOut}>Logout</Button>
    </>
  )
}

export default Dashboard