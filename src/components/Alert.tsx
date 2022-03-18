import { useLocation } from "react-router-dom";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import "./Alert.css";
import { useEffect, useState } from "react";
import { resendActivateAccountLinkAction } from "../redux/actions/authActions";

const Alert = () => {
    
    const dispatch = useDispatch();
    const { state } = useLocation();

    const [isResendLinkReady, setIsResendLinkReady] = useState(false);

    const disableResendLink = () => setIsResendLinkReady(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsResendLinkReady(true)
    //     }, 2000 * 60)
    // }, [isResendLinkReady])

    const resendLink = () => {
        dispatch(resendActivateAccountLinkAction(disableResendLink))
    }

    const { userData } = useSelector((state: RootState) => state.auth)
    return (userData as any)?.isActive === false ? (
        <div className={`alert`}>
            We sent you a confirmation email, go and check {(userData as any)?.email}.
            {
                isResendLinkReady ? <span onClick={resendLink} className="resend-link-button"> Resend link</span> : "Wait a little bit to resend the link"
            }
        </div>
    ) : ((userData as any)?.isActive === true && (state as any)?.fromConfirmation) ? (
        <div className={`alert`}>
            You already confirmed your Account
        </div>
    ) : null;
}

export default Alert
