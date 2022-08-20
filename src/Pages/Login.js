import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase/firebase'
import './Login.css'
import { login } from '../redux/userSlice';
import { provider } from '../firebase/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";





function Login() {

    const dispatch = useDispatch()

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;

                dispatch(login({
                    displayName: user.displayName,
                    eamil: user.email,
                    photoUrl: user.photoURL,


                }))
            })
            .catch((error) => alert(error))
    }


    return (
        <div className='login'>


            <div className='img__login'>
                <img src='https://images.news18.com/ibnlive/uploads/2020/11/1604413203_gmail_logo.jpg?im=FitAndFill,width=1200,height=1200'
                    alt='gamil' />
            </div>

            <Button onClick={signIn}>Login</Button>

        </div>
    )
}

export default Login