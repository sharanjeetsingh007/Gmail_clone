import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sidebarState: false,

}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        tougleSidebar: state => {
            state.sidebarState = !state.sidebarState;
        },
        // closeSidebar: state => {
        //     state.sidebarState = true;
        // },


    },
})

export const sidebarStateIs = state => state.sidebar.sidebarState;
export const { tougleSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer