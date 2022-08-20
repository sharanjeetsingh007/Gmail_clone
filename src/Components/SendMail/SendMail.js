import React, { useEffect, useRef, useState } from 'react';
import "./SendMail.css";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../redux/mailSlice';
import { db } from '../../firebase/firebase';
// import { doc, setDoc, } from "firebase/firestore";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
// import firebase from '../../Firebase/Firebase';

import emailjs from '@emailjs/browser';





function SendMail() {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");

    const [errorIs, setErrorIs] = useState(null)

    const [sendSelection, setSendSelection] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const dispatch = useDispatch()

    const form = useRef();


    const onSubmit = (formData) => {

        if (sendSelection === null) {
            console.log("🔥")
            return setErrorIs(<p className='sendmail__error'>Please select from options</p>)
        } else {



            console.log(formData)

            console.log(form.current, 'form inside onSubmit')

            emailjs.sendForm("service_ralo0rk", "template_t5a5ez7", form.current, "user_TT6gYzX3eq1S4CNiMe3Uo")
                .then((result) => {
                    console.log(result, 'result')

                })
                .catch((error) => console.log(error))

            addDoc(collection(db, sendSelection), {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: serverTimestamp()
            })


            dispatch(closeSendMessage())




        }


    }
    const handleChange = (e) => {
        setInput1(e.target.value)
            ;
    }

    // useEffect(() => {

    //     let hi = !sendSelection && <p className='sendmail__error'>Please select from options</p>
    //     return setErrorIs;

    // }, [onSubmit])

    console.log(errorIs)
    return (
        <div className='sendMail'>


            <div className='sendMail__header'>
                <h3>New Message</h3>
                <CloseIcon className='mui__close' onClick={() => dispatch(closeSendMessage())} />
            </div>

            <form
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
            >

                <input

                    {...register('to', { required: true })}
                    placeholder='To'
                    type='email' />

                {errors.to && <p className='sendmail__error'>To is required</p>}
                <input


                    {...register('subject', { required: true })}

                    placeholder='Subject'
                    type='text' />
                {errors.subject && <p className='sendmail__error'>Subject is required</p>}

                <input

                    {...register('message', { required: true })}

                    name='message'
                    className='sendMal__message'
                    type='text' />
                {errors.message && <p className='sendmail__error'>Message is required</p>}
                {errors.primary && <p className='sendmail__error'>Primary is required</p>}
                {errorIs}
                <div className='sendMail__options'>
                    <Button
                        className='sendMail__button'
                        variant='container'
                        color='primary'
                        type='submit'



                    >Send</Button>

                    <div className='sendMail__selectbuttons'>
                        <Button variant="outlined" className='primary__btn'

                            onClick={() => setSendSelection("emails")}
                        >Primary</Button>
                        <Button variant="outlined" className='social__btn'
                            onClick={() => setSendSelection("socials")}
                        >Social</Button>

                        <Button variant="outlined" className='promation__btn'

                            onClick={() => setSendSelection("promations")}
                        >Promation</Button>
                    </div>



                </div>


            </form>


        </div>
    )
}

export default SendMail