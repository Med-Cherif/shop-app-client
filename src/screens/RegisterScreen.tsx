import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppDescription from "../components/AppDescription";
import FormFooter from "../components/Form/FormFooter";
import FormInput from "../components/Form/FormInput";
import FormButton from "../components/FormButton";
import { signupAction } from "../redux/actions/authActions";
import { RootState } from "../redux/store";

const RegisterScreen = () => {

    const dispatch = useDispatch()
    const { loading: { isLoading, type } } = useSelector((state: RootState) => state.auth)

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

                            <FormButton 
                                disabled={isLoading && type === "sign"}
                                text="Sign up"
                                loading={isLoading && type === "sign"}
                            />

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
