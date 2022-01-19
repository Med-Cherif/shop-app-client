import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
    const { accessToken } = useSelector((state: RootState) => state.auth)
    
    if (accessToken) {
        return <Navigate to="/" replace={true} />
    }
    return children
}

export default PublicRoute
