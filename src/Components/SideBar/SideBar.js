import { Button, IconButton } from '@mui/material'
import React from 'react';
import './SideBar.css';
import AddIcon from '@mui/icons-material/Add';
import SideBarOptions from '../SideBarOptions/SideBarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { openSendMessage } from '../../redux/mailSlice'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SendIcon from '@mui/icons-material/Send';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import EmailIcon from '@mui/icons-material/Email';
import DraftsIcon from '@mui/icons-material/Drafts';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';

import sidebarStateIs from '../../redux/sidebarSlice'



function SideBar() {


    const dispatch = useDispatch();

    const selector = useSelector(state => state.sidebar.sidebarState)


    return (
        <div className='sidebar'
            style={{ flex: selector === true ? 'none' : '0.3' }}
        >
            <Button
                style={{
                    width: selector === true && '2px',
                    height: selector === true && "57px",
                    padding: selector === true && "0px",

                }}

                onClick={() => dispatch(openSendMessage())}
                className='sidebar__compose'
            >
                <AddIcon
                    className='compose__plus__icon'

                />

                <span
                    style={{ display: selector === true && 'none' }}
                >Compose</span></Button>


            <SideBarOptions Icon={InboxIcon} title="Index" number={22} selected={true} />
            <SideBarOptions Icon={StarIcon} title="Starred" number={22} />
            <SideBarOptions Icon={AccessTimeFilledIcon} title="Snoozed" number={22} />
            <SideBarOptions Icon={SendIcon} title="Sent" number={22} />
            <SideBarOptions Icon={NoteAddIcon} title="Drafts" number={22} />
            <SideBarOptions Icon={LabelImportantIcon} title="Recuritment" number={22} />
            <SideBarOptions Icon={LabelImportantIcon} title="Unwanted" number={22} />

            <div className='sidebar__footer'

                style={{ marginLeft: selector === true && '15px' }}
            >
                <div className='sidebar__footerIcons'>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <DraftsIcon />
                    </IconButton>
                    <IconButton>
                        <MarkunreadMailboxIcon />
                    </IconButton>
                </div>
            </div>

        </div >
    )
}

export default SideBar