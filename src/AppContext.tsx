import { createContext, useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { createAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const AppContext = createContext({})

// reset data on every location change
const resetAction = createAction('reset')

interface GlobalState {
    isSidebarVisible: boolean;
    showSidebar: () => void;
    hideSidebar: () => void;
}

const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const dispatch = useDispatch()
    const location = useLocation()
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const showSidebar = () => setIsSidebarVisible(true)
    const hideSidebar = () => setIsSidebarVisible(false)

    useEffect(() => {
        dispatch(resetAction())
    }, [location])

    return (
        <AppContext.Provider value={{
            isSidebarVisible, showSidebar, hideSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

export const useGlobalState = () => {
    return useContext(AppContext) as GlobalState
}
