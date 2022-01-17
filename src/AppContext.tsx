import { createContext, useContext, useState } from "react"

const AppContext = createContext({})

interface GlobalState {
    isSidebarVisible: boolean;
    showSidebar: () => void;
    hideSidebar: () => void;
}

const AppProvider = ({ children }: { children: React.ReactNode }) => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const showSidebar = () => setIsSidebarVisible(true)
    const hideSidebar = () => setIsSidebarVisible(false)

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
