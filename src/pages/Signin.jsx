import React,{useEffect} from 'react'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


// import FacebookLogin from 'react-facebook-login';

export const Signin = () => {
    const { googleSignIn,user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
          await googleSignIn();
        //   console.log('im in')
        } catch (error) {
          console.log('here', error);
        }
      };

      useEffect(() => {
        if (user != null ) {
          navigate('/dashboard');
        }
      }, [user]);

  return (
    <div className='gbutton'>
        <GoogleButton onClick={handleGoogleSignIn}/>
        {/* <FacebookLogin/> */}
    </div>
  )
}
