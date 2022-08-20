import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sendMessageIsOpen: false,
    selectedMail: null,
    back: "notSelected",
    back1: "selected1",
    back3: "notSelected"
}

const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        openSendMessage: state => {
            state.sendMessageIsOpen = true;
        },
        closeSendMessage: state => {
            state.sendMessageIsOpen = false;
        },
        selectMail: (state, action) => {
            state.selectedMail = action.payload;
        },
        backSelect: (state, action) => {
            state.back = action.payload;
        },
        backSelect1: (state, action) => {
            state.back1 = action.payload;
        },
        backSelect3: (state, action) => {
            state.back3 = action.payload;
        }



    },
})

export const backState3 = state => state.mail.back3;

export const backState1 = state => state.mail.back1;

export const backState = state => state.mail.back;
export const selectMaliState = state => state.mail.selectedMail;
export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;
export const { openSendMessage, closeSendMessage, selectMail, backSelect, backSelect1, backSelect3 } = mailSlice.actions
export default mailSlice.reducer