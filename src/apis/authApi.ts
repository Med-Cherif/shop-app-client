import axios from "axios";

const AUTH_API_URL = process.env.REACT_APP_API_URL;

export interface SigninData {
    preferedSocial: string;
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

    confirmEmail(email: string, token: string) {
        return axios.get(`${AUTH_API_URL}/account/confirmation/${email}/${token}`)
    }
}



export default AuthApis