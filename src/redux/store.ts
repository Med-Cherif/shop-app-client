import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

const appReducer = combineReducers({
    auth: authReducer
})

const rootReducer = (state: any, action: any) => {
    if (action.type === 'auth/logout') {
        
    }
    return appReducer(state, action)
}

const store = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch