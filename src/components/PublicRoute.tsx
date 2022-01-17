import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    // const state = useSelector((state: RootState) => state.auth)
    const isAuth = false
    if (isAuth) {
        return <Navigate to="/" replace={true} />
    }
    return children
}

export default PublicRoute
