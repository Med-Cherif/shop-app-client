import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { getAccessToken, getRefreshToken, getUserData } from "../../helpers/authHelpers";

const initialState = {
    loading: {
        isLoading: false,
        type: ''   
    },
    error: null,
    accessToken: null || getAccessToken(),
    refreshToken: null || getRefreshToken(),
    userData: null || getUserData(),
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loading: (state, action) => {
            state.error = null;
            const type = action.payload;
            state.loading = {
                isLoading: true,
                type
            }
        },
        error: (state, action) => {
            state.loading = {
                isLoading: false,
                type: ''
            }
            state.error = action.payload
        },
        authSuccess: (state, action) => {
            const { payload } = action
            state.loading = {
                isLoading: false,
                type: ''
            }
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