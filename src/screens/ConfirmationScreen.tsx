import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { confirmEmailAction } from "../redux/actions/authActions"
import "./styles/ConfirmationScreen.css"

const ConfirmationScreen = () => {

    const dispatch = useDispatch()
    const { email, token } = useParams()
    const { loading: { type, isLoading }, error, userData } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        if (email && token) {
            dispatch(confirmEmailAction(email, token))
        }
    }, [])

    if ((isLoading && type === 'confirmation-email')) {
        return <div className="confirmation-loading"></div>
    }

    if (error) {
        return <div className="confirmation-error">
            {
                typeof error === "string" ? (
                    <>
                        {error}
                        <Link style={{ display: 'block', margin: 'auto', textAlign: 'center' }} to="/"> Go to home page</Link>
                    </>
                ) : (
                    <>
                        Oops... Something went wrong
                        <Link style={{ display: 'block', margin: 'auto', textAlign: 'center' }} to="/"> Go to home page</Link>
                    </>
                )
            }
            
        </div>
    }

    if ((userData as any)?.isActive === true) {
        return <Navigate to="/" replace={true} state={{
            fromConfirmation: true,
        }} />
    }

    return <Navigate to="/" replace={true} />

}

export default ConfirmationScreen
