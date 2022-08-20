import { Checkbox, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react';
import RedoIcon from '@mui/icons-material/Redo';
import "./EmailList.css"
import InboxIcon from '@mui/icons-material/Inbox';
import Section from '../Section/Section';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from '../EmailRow/EmailRow';
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from '../../firebase/firebase'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import EmailRowSocial from '../EmailRowSocial/EmailRowSocial';
import { useSelector } from 'react-redux';
import { backState, backState1, backState3, selectMaliState } from '../../redux/mailSlice'
import EmailRowPromotion from '../EmailRowPromotion.js/EmailRowPromotion';







function EmailList() {

    const selector = useSelector(backState);
    const back1 = useSelector(backState1);
    const back3 = useSelector(backState3);



    const [emails, setEmails] = useState([]);
    const [emailsSocails, setEmailsSocials] = useState([]);
    const [emailsPromotions, setEmailsPromotions] = useState([]);



    const [select1, setSelect1] = useState(back1)



    const [select2, setSelect2] = useState(selector)
    // const [select2, setSelect2] = useState("notSelected")

    const [select3, setSelect3] = useState(back3)






    useEffect(() => {

        const collectionIs = query(collection(db, "emails"), orderBy('timestamp', 'desc'));


        onSnapshot(collectionIs, snapShot => {
            // console.log(snapShot.docs, 'this is data')
            setEmails(snapShot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })

        const collectionSocails = query(collection(db, "socials"), orderBy('timestamp', 'desc'));


        onSnapshot(collectionSocails, snapShot => {
            // console.log(snapShot.docs, 'this is data')
            setEmailsSocials(snapShot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })


        const collectionPromotions = query(collection(db, "promations"), orderBy('timestamp', 'desc'));


        onSnapshot(collectionPromotions, snapShot => {
            // console.log(snapShot.docs, 'this is data')
            setEmailsPromotions(snapShot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })


        if (back1.back) {
            setSelect1(back1.back)

        }
        if (selector.back) {
            setSelect2(selector.back)

        }

        if (back3.back) {
            setSelect3(back3.back)

        }

    }, [])

    const selectHandle1 = () => {

        setSelect1("selected1")
        setSelect2("notSelected")
        setSelect3("notSelected")

    }
    const selectHandle2 = () => {

        setSelect2("selected2")
        setSelect1("notSelected")
        setSelect3("notSelected")

    }
    const selectHandle3 = () => {

        setSelect3("selected3")
        setSelect1("notSelected")
        setSelect2("notSelected")


    }



    return (
        <div className='emaillist'>

            <div className='emailList__settings'>

                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
                <div className='emailList__settingsRight'>

                    <IconButton>
                        <FormatListNumberedRtlIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>



                </div>

            </div>

            <div className='emailList__sections'>
                <div
                    onClick={selectHandle1}
                >
                    <Section Icon={InboxIcon} title="Primary" color='red' selected1={select1} />
                </div>
                <div className='11'
                    onClick={selectHandle2}
                >
                    <Section Icon={PeopleIcon} title="Social" color='#1A72E9' selected2={select2} />
                </div>
                <div
                    onClick={selectHandle3}
                >
                    <Section Icon={LocalOfferIcon} title="Promation" color='green' selected3={select3} />
                </div>

            </div>

            {select1 === "selected1" ? <div className='emailList__list'>

                {emails.map(({ id, data: { to, message, subject, timestamp } }) => (
                    // console.group(id, data)

                    <EmailRow
                        back={select1}
                        id={id}
                        key={id}
                        to={to}
                        subject={subject}
                        message={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}


            </div> : select2 === "selected2" ? <div className='emailList__list__social'>



                {emailsSocails.map(({ id, data: { to, message, subject, timestamp } }) => {
                    return <EmailRowSocial
                        back={select2}
                        id={id}
                        key={id}
                        to={to}
                        subject={subject}
                        message={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />

                })}

            </div> :
                <>

                    {emailsPromotions.map(({ id, data: { to, message, subject, timestamp } }) => {
                        return <EmailRowPromotion
                            back={select3}
                            id={id}
                            key={id}
                            to={to}
                            subject={subject}
                            message={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}
                        />

                    })
                    }

                </>

            }


        </div>
    )
}

export default EmailList