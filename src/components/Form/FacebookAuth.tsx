import FacebookLogin, { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from "react-facebook-login/dist/facebook-login-render-props";
import ButtonSocial from "./ButtonSocial";
import { FaFacebook } from "react-icons/fa";

const FacebookAuth = () => {

    const onSuccess = (facebookResponse: ReactFacebookLoginInfo) => {
        console.log(facebookResponse)
    }

    const onFail = (error: ReactFacebookFailureResponse) => {
        console.log(error)
    }

    return (
        <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID!}
            callback={onSuccess}
            onFailure={onFail}
            
            render={(renderProps) => {
                return <ButtonSocial disabled={renderProps.isDisabled ? true : false} onClick={renderProps.onClick} social="facebook">
                    <FaFacebook />
                </ButtonSocial>
            }}
        />    
    )
}

export default FacebookAuth
