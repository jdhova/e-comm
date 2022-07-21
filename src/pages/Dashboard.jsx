import { Button } from 'react-bootstrap';
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
 import { collection, getDocs,addDoc } from 'firebase/firestore';
import { db } from "../firebase"


const Dashboard = () => {
    const [userName, setUserName] = useState('')
    const [userPosition, setUserPosition] = useState('')
    const [userHours, setUserHours] = useState('')

    const [ users, setUsers] = useState([])
    const usersRef = collection(db, "users")

    const createUser = async () => {
        await addDoc(usersRef, {
            name : userName,
            position: userPosition, 
            hours: userHours
        })
    }
    
    useEffect(() => {
        const getUsers =  async () => {
            const data = await getDocs(usersRef);
            // console.log(data)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsers();
    },[])



    const { logOut, user } = UserAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
      try {
        await logOut();
        navigate('/');
      } catch (error) {
      
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

    
        

  return (
    
    <div className='dash-main'>
        <h3> Welcome to {user.displayName}s'Dash Board</h3>
           
            <br></br>
           <h4>  Good Day {user.displayName}  its {today}{check()} </h4> 
            <h4>Kindly fill in hours worked</h4>
        {/* <Button onClick={handleSignOut}>Logout</Button> */}

 

    <div className='form-container'>


    
        <div className="form-group">
            <label htmlFor="inputAddress">Name</label>
            <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            onChange ={(e)=> {
                setUserName(e.target.value)}}
            />
        </div>
        <div className="form-group">
            <label htmlFor="inputAddress2">Position</label>
            <input
            type="text"
            className="form-control"
            id="position"
            placeholder="Position"
            onChange ={(e)=> {
                setUserPosition(e.target.value)}}
            />
        </div>
        <div className="form-group">
            <label htmlFor="inputAddress2">Hours worked</label>
            <input
            type="number"
            className="form-control"
            id="hoursworked"
            placeholder="Hours worked"
            onChange ={(e)=> {
                setUserHours(e.target.value)}}
            />
        </div>

       

        <button onClick = {createUser} type="submit" className="btn btn-primary">
            Submit
        </button>
    </div>

        
                 <h3 className='work'>Employee work hours </h3>
       
        <div className='results'>
          
            

            {users.map((user) => {
                        return <div className='results2'>
                            <h3>Name: {user.name}</h3>
                            <h3>Position: {user.position}</h3>
                            <h3>Hours worked: {user.hours}</h3>
                            </div>
                })}

        </div>

          

    </div>
  )
}

export default Dashboard