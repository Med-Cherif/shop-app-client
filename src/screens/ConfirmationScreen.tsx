import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { RootState } from "../redux/store"
import "./styles/ConfirmationScreen.css"


const ConfirmationScreen = () => {

    const dispatch = useDispatch()
    const { email, token } = useParams()
    const { isLoading, error, userData } = useSelector((state: RootState) => state.auth)

    useEffect(() => {

    }, [])

    if (false) {
        return <div className="confirmation-loading"></div>
    }

    if (false) {
        return <div className="confirmation-error">
            Oops... Something went wrong, please try again
            <Link style={{ display: 'block', margin: 'auto', textAlign: 'center' }} to="/"> Go to home page</Link>
        </div>
    }

    return (
        <div className="confirmation-success">
            Congratulation, you confirmed your email address
            <Link style={{ display: 'block', margin: 'auto', textAlign: 'center' }} to="/"> Go to home page</Link>
        </div>
    )
}

export default ConfirmationScreen
