import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";

const appReducer = combineReducers({
    auth: authReducer,
    product: productReducer
})

const rootReducer = (state: any /* ReturnType<typeof appReducer> */, action: any) => {
    if (action.type === 'auth/logout') {
        state = {
            ...state,
            auth: {
                accessToken: null,
                refreshToken: null,
                error: null,
                loading: {
                    isLoading: false,
                    type: ''
                },
                userData: null
            }
        }
    }
    if (action.type === 'reset') {
        state = {
            ...state,
            auth: {
                ...state.auth,
                error: null,
                loading: {
                    isLoading: false,
                    type: ''
                }
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