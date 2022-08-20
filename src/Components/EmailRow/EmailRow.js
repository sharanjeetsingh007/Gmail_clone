import { Checkbox, IconButton, Popover } from '@mui/material'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import './EmailRow.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { backSelect, backSelect1, backSelect3, selectMail } from '../../redux/mailSlice';
import { useState, useEffect } from 'react';




function EmailRow({ to, subject, message, time, id, back }) {


    const [timeWill, setTimeWill] = useState(null);

    const dispatch = useDispatch()

    const history = useNavigate();

    const handleClick = () => {
        dispatch(selectMail(
            {
                id: id,
                to: to,
                subject: subject,
                message: message,
                timestamp: time,
            }
        ))

        dispatch(backSelect1({
            back: back,

        }))

        dispatch(backSelect({
            back: "notSelected",

        }))

        dispatch(backSelect3(
            { back: "notSelected", }

        ))

        history('./mail')
    }

    const timeIs = async (time) => {
        const newTime = await time.split(" ")
        const actualTime = newTime[4].split(":")

        let amPmTime;

        if (actualTime[0] > 12) {
            amPmTime = actualTime[0] + ":" + actualTime[1] + " " + "pm";
            // console.log(amPmTime, 'amPmTime')
            setTimeWill(amPmTime)

        } else {
            amPmTime = actualTime[0] + ":" + actualTime[1] + " " + "am";
            // console.log(amPmTime, 'amPmTime')
            setTimeWill(amPmTime)
        }
    }

    useEffect(() => {
        timeIs(time)

    }, [time])



    return (
        <div className='emailRow' onClick={handleClick}>

            <div className='emailRow__options'>
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>

                <IconButton>
                    <LabelImportantIcon />
                </IconButton>

            </div>
            <div className='emailRow__title'>
                <h3>{to}</h3>
            </div>
            <div className='emailRow__message'>
                <h4>{subject}{" "}
                    <span className='emailRow__description'>
                        -{" "}{message}
                    </span>
                </h4>
            </div>
            <div className='emailRow__time'>
                <p>{timeWill}</p>


            </div>





        </div>
    )
}

export default EmailRow