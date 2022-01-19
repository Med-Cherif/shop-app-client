import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const appReducer = combineReducers({
    auth: authReducer
})

const rootReducer = (state: any /* ReturnType<typeof appReducer> */, action: any) => {
    if (action.type === 'auth/logout') {
        state = {
            auth: {
                accessToken: null,
                refreshToken: null,
                error: null,
                isLoading: false,
                userData: null
            }
        }
    }
    return appReducer(state, action)
}

const store = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch