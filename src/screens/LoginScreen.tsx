import FormInput from "../components/Form/FormInput";
import "./styles/Login.css";

const LoginScreen = () => {
    return (
        <div className="login-screen full-screen">
            <div className="container">
                <div className="login-screen-wrapper">
                    <div className="application-description-wrapper">
                        <h2 className="application-description-heading">Welcome to <span>Bibo app</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit architecto voluptatibus cupiditate. Exercitationem, rem! Voluptate non aliquam sint aperiam, at ad quod, dolor delectus deleniti debitis quas modi, consequuntur consectetur amet error sequi recusandae.</p>
                    </div>
                    <div className="form-wrapper">
                        <form className="form">
                            <h2 className="form-title">Sign in</h2>
                            <FormInput name="preferedField" onChange={() => {}} type="text" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
