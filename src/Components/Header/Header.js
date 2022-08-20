import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase';
import { logout } from '../../redux/userSlice'
import { tougleSidebar } from '../../redux/sidebarSlice'
import Button from '@mui/material/Button';



function Header() {


    const user = useSelector(state => state.user.user)


    const dispatch = useDispatch()

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(logout());

            })

    }



    const handleSidebar = () => {
        dispatch(tougleSidebar())
    }

    return (
        <div className='header'>

            <div className='header__left'>
                <IconButton
                    onClick={handleSidebar}
                >
                    <MenuIcon />
                </IconButton>
                <img src='https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'
                    alt='logo'
                />
            </div>
            <div className='header__middle'>
                <SearchIcon />
                <input type='text' placeholder='Search mail' />
                <ArrowDropDownIcon />
            </div>
            <div className='header__right'>
                <IconButton>
                    <HelpOutlineIcon className='help__icon' />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>


                <Avatar
                    className='avatar__header'
                    src={user?.photoUrl} />

                <Button variant="outlined"
                    className='signout__btn'
                    onClick={signOut}
                >
                    S<span>ign Out</span>
                </Button>

            </div>

        </div>

    )
}

export default Header