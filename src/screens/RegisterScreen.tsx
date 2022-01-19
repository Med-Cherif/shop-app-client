import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AppDescription from "../components/AppDescription";
import FormFooter from "../components/Form/FormFooter";
import FormInput from "../components/Form/FormInput";
import { signupAction } from "../redux/actions/authActions";

const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [registerData, setRegisterData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const fillRegisterFields = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData((prevData) => {
            return {...prevData, [e.target.name]: e.target.value}
        })
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(signupAction(registerData))
    }

    return (
        <div className="auth-screen full-screen pd-y pd-x">
            <div className="container">
                <div className="auth-screen-wrapper">
                    <AppDescription />
                    <div className="form-wrapper">
                        <form onSubmit={onSubmit}>
                            <h2 className="form-title">Sign up</h2>

                            <FormInput placeholder="Username" name="username" onChange={fillRegisterFields} type="text" />
                            <FormInput placeholder="E-mail" name="email" onChange={fillRegisterFields} type="text" />
                            <FormInput placeholder="Your name" name="name" onChange={fillRegisterFields} type="text" />
                            <FormInput placeholder="Password" name="password" onChange={fillRegisterFields} type="password" />
                            <FormInput placeholder="Confirm password" name="confirmPassword" onChange={fillRegisterFields} type="password" />

                            <div className="submit-button-wrapper">
                                <button className="submit-button" type="submit">Sign up</button>
                            </div>

                            <div className="auth-links">
                                <Link to="/login">Already have an Account? Sign in</Link>
                            </div>

                            <FormFooter />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen
