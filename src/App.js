import './App.css';
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Mail from "./Components/Mail/Mail";
import EmailList from './Components/EmailList/EmailList';
import SendMail from './Components/SendMail/SendMail';

import { useDispatch, useSelector } from 'react-redux';
import { user } from './redux/userSlice';

import Login from './Pages/Login'
import { useEffect } from 'react';
import { auth } from './firebase/firebase';
// import { useDispatch } from 'react-redux'
import { login, logout } from './redux/userSlice'
import EmailRowSocial from './Components/EmailRowSocial/EmailRowSocial';


function App() {

  const sendMessageIsOpen = useSelector(state => state.mail.sendMessageIsOpen)

  const userValue = useSelector(user);

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,

        }))
      }
      // else {

      // }
    })

  }, [])


  return (
    <BrowserRouter>

      {!userValue ? <Login /> : (
        <div className="App">




          < Header />

          <div className='app__body'>
            <SideBar />
            <Routes>
              <Route path='/mail' element={<Mail />} />
              <Route path='/' exact element={<EmailList />} />
              <Route path='/socail' element={<EmailRowSocial />} />
            </Routes>



          </div>
          {sendMessageIsOpen && <SendMail />}


        </div>
      )}

    </BrowserRouter>
  );
}

export default App;
