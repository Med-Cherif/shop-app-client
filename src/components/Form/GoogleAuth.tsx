import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import ButtonSocial from "./ButtonSocial";
import { BsGoogle } from "react-icons/bs";


const GoogleAuth = () => {
    
    const responseGoogle = (googleResponse: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if ((googleResponse as any)?.error) {
            console.log(googleResponse)
            return;
        }
        console.log((googleResponse as any).tokenId)
    }
    
    return (
        
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={(renderProps) => {
                return <ButtonSocial disabled={renderProps.disabled} onClick={renderProps.onClick} social="google"><BsGoogle /></ButtonSocial>
            }}
        />
    )
}

export default GoogleAuth
