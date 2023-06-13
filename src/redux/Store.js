import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../authUser/userSlice'

export default configureStore({
    reducer: {
        user: userReducer,
    },
})

