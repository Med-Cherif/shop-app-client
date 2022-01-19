import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import "./Alert.css";

const Alert = () => {
    const { userData } = useSelector((state: RootState) => state.auth)
    return (userData as any)?.isActive === false ? (
        <div className={`alert`}>
            We sent you a confirmation email, go and check {(userData as any)?.email}
        </div>
    ) : null;
}

export default Alert
