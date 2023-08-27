import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Mahdi Hassani' },
    { id: '1', name: 'Masooma Amini' },
    { id: '2', name: 'Ali reza' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer