import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        signup: (state, action) => {
            state.user = action.payload;
        },
        login: (state, action) => {
            state.loguser = action.payload;
        },
        logout: (state, action) => {
            state.loguser = action.payload;
        },
    },
});

export const { signup, login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;


