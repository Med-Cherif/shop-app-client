import axios from "axios";

const AUTH_API_URL = process.env.REACT_APP_API_URL;

export interface SigninData {
    preferedField: string;
    password: string;
}

export interface SignupData {
    username: string;
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

class AuthApis {
    signin(signinData: SigninData) {
        return axios.post(AUTH_API_URL + '/signin', signinData)
    }

    signup(signupData: SignupData) {
        return axios.post(AUTH_API_URL + '/signup', signupData)
    }

    signout(userId: string) {
        return axios.get(`${AUTH_API_URL}/signout/${userId}`)
    }

    resendActivateAccountLink(email: string) {
        return axios.get(`${AUTH_API_URL}/account/resend-link/${email}`)
    }

    confirmEmail(email: string, token: string) {
        return axios.get(`${AUTH_API_URL}/account/confirmation/${email}/${token}`)
    }

    getValidAccessToken(refreshToken: string) {
        return axios.post(`${AUTH_API_URL}/refresh-token`, { refreshToken })
    }
}



export default AuthApis