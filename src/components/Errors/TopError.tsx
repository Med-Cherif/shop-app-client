import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { authActions } from "../../redux/slices/authSlice";
import "./TopError.css";

const TopError = () => {

    const [isError, setIsError] = useState(true)
    const dispatch = useDispatch()
    const { error } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        if (!error) {
            setIsError(false);
        } else {
            setIsError(true)
        }
    }, [error])

    const hideErrors = () => {
        dispatch(authActions.resetAuthError())
    }

    const renderFirstItem = (errorMessage: string) => (
        <li className="top-error-item first">
            <p>{errorMessage}</p>
            <GrClose style={{ cursor: "pointer" }} onClick={hideErrors} />
        </li>

    )

    const errorItem = (errorMessage: string) => (
        <li className="top-error-item">
            <p>{errorMessage}</p>
        </li>
    )

    const displayError = () => {
        return typeof error === "string" 
            ? renderFirstItem(error)
            : Array.isArray(error) ? (error as string[]).map((err, i) => (i === 0 ? renderFirstItem(err) : errorItem(err)))
            : null
    }

    return isError ? (
        <ul className={`error top-error ${isError ? "visible" : ""}`}>
            {displayError()}
        </ul>
    ) : null
}

export default TopError
