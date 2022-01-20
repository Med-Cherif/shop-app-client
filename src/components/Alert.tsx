import { useLocation } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import "./Alert.css";

const Alert = () => {

    const { state } = useLocation()

    const { userData } = useSelector((state: RootState) => state.auth)
    return (userData as any)?.isActive === false ? (
        <div className={`alert`}>
            We sent you a confirmation email, go and check {(userData as any)?.email}
        </div>
    ) : ((userData as any)?.isActive === true && (state as any)?.fromConfirmation) ? (
        <div className={`alert`}>
            You already confirmed you account
        </div>
    ) : null;
}

export default Alert
