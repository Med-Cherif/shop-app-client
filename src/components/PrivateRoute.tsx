import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { accessToken } = useSelector((state: RootState) => state.auth)
    const location = useLocation()
    if (!accessToken) {
        return <Navigate to="/login" replace={true} state={location} />
    }
    return children
}

export default PrivateRoute