import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppDescription from "../components/AppDescription";
import FormInput from "../components/Form/FormInput";
import { signinAction } from "../redux/actions/authActions";
import { RootState } from "../redux/store";
import "./styles/Login.css";

const LoginScreen = () => {

    const dispatch = useDispatch()
    const { loading: { type, isLoading } } = useSelector((state: RootState) => state.auth)
    const [loginData, setLoginData] = useState({
        preferedField: "",
        password: ""
    })

    const fillLoginFields = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData((prevData) => {
            return {...prevData, [e.target.name]: e.target.value}
        })
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(signinAction(loginData))
    }
    
    

    return (
        <div className="auth-screen full-screen pd-y pd-x">
            <div className="container">
                <div className="auth-screen-wrapper">
                    <AppDescription />
                    <div className="form-wrapper">
                        <form onSubmit={onSubmit} className="form">
                            <h2 className="form-title">Sign in</h2>
                            <FormInput placeholder="Username or E-mail" name="preferedField" onChange={fillLoginFields} type="text" />
                            <FormInput placeholder="Password" name="password" onChange={fillLoginFields} type="password" />

                            <div className="submit-button-wrapper">
                                <button 
                                    disabled={(isLoading && type === 'sign') ? true : false} 
                                    className={`submit-button`}
                                    type="submit"
                                >
                                    {(isLoading && type === 'sign') ? "Loading..." : "Sign in"}
                                </button>
                            </div>

                            <div className="auth-links">
                                <Link to="/register">New here? create a new Account</Link>
                                <Link to="/forgot-password">Forgot password?</Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
