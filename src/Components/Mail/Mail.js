import React from 'react'
import { IconButton } from '@mui/material'
import RedoIcon from '@mui/icons-material/Redo'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

import "./Mail.css"
import { useSelector } from 'react-redux';
import { selectMaliState } from '../../redux/mailSlice'

import MoreVertIcon from '@mui/icons-material/MoreVert';

import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ArchiveIcon from '@mui/icons-material/Archive';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AllInboxIcon from '@mui/icons-material/AllInbox';




function Mail() {

    const history = useNavigate();

    const selector = useSelector(selectMaliState)

    return (
        <div className='mail'>

            <div className='mail__tools'>
                <div className='mail__toolLeft'>
                    <IconButton onClick={() => history('/')}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <ArchiveIcon />
                    </IconButton>
                    <IconButton>
                        <ReportIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <AttachEmailIcon />
                    </IconButton>
                    <IconButton>
                        <AccessTimeFilledIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>




                </div>
                <div className='mail__toolRight'>
                    <IconButton>
                        <AllInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>

            </div>
            <div className='mail__body'>
                <div className='mail__bodyHeader'>
                    <h2>{selector?.subject}</h2>
                    <LabelImportantIcon className='mail__important' />
                    <p>{selector?.to}</p>
                    <p className='mail__time'>{selector?.timestamp}</p>
                </div>


                <div className='mail__message'>

                    <p className="mail__message__p">{selector?.message}</p>
                </div>
            </div>



        </div>
    )
}

export default Mail