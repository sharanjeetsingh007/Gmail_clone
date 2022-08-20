import { configureStore } from "@reduxjs/toolkit";
import mailReducer from './mailSlice';
import userReducer from './userSlice';
import sidebarReducer from './sidebarSlice';

export default configureStore({
    reducer: {
        mail: mailReducer,
        user: userReducer,
        sidebar: sidebarReducer,
    }
})
