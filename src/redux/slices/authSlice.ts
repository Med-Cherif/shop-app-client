import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { getAccessToken, getRefreshToken, getUserData } from "../../helpers/authHelpers";

const initialState = {
    isLoading: false,
    error: null,
    accessToken: null || getAccessToken(),
    refreshToken: null || getRefreshToken(),
    userData: null || getUserData(),
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loading: (state) => {
            state.error = null
            state.isLoading = true
        },
        error: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        authSuccess: (state, action) => {
            const { payload } = action
            state.isLoading = false
            state.accessToken = payload.accessToken
            state.refreshToken = payload.refreshToken
            state.userData = jwtDecode(payload.accessToken)
            localStorage.setItem('chemo', JSON.stringify({ accessToken: payload.accessToken, refreshToken: payload.refreshToken }))
        },
        logout: (state) => {
            localStorage.removeItem('chemo')
        },
        resetAuthError: (state) => {
            state.error = null;
        }
    }
})

export const authActions = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer