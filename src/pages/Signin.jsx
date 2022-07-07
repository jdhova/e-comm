import React from 'react'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/AuthContext'

// import FacebookLogin from 'react-facebook-login';

export const Signin = () => {
    const { googleSignIn, user } = UserAuth();

    const handleGoogleSignIn = async () => {
        try {
          await googleSignIn();
          console.log('im in')
        } catch (error) {
          console.log('here', error);
        }
      };

  return (
    <div className='gbutton'>
        <GoogleButton onClick={handleGoogleSignIn}/>
        {/* <FacebookLogin/> */}
    </div>
  )
}
