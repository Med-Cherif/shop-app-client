import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../redux/store";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    // const state = useSelector((state: RootState) => state.auth)
    const location = useLocation()
    const isAuth = false
    if (!isAuth) {
        return <Navigate to="/register" replace={true} state={location} />
    }
    return children
}

export default PublicRoute