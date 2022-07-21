import { Button } from 'react-bootstrap';
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
 import { collection, doc, getDocs,addDoc } from 'firebase/firestore';
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

    
        

  return (
    
      <>
     <h3> Welcome to {user.displayName}s'Dash Board</h3>
        Good Day 
        <br></br>
         {user.displayName}  its {today}{check()}
         <h3>Kindly fill in hours worked</h3>
    <Button onClick={handleSignOut}>Logout</Button>

 

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

        {/* <div className="form-row">
            <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
            </div>
            
            <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
                <option selected="">Choose...</option>
                <option>...</option>
            </select>
            </div>
            <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
            </div>
        </div> */}

        {/* <div className="form-group">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
                Check me out
            </label>
            </div>
        </div> */}

        <button onClick = {createUser} type="submit" className="btn btn-primary">
            Submit
        </button>
</div>

{users.map((user) => {
            return <div>
                 <h3>Name: {user.name}</h3>
                 <h3>Position: {user.position}</h3>
                 <h3>Hours worked: {user.hours}</h3>
                 </div>
    })}


    </>
  )
}

export default Dashboard