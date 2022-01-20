import AuthApis, { SigninData, SignupData } from "../../apis/authApi";
import AuthValidation from "../../validation/authValidation";
import { AppDispatch } from "../store";
import { authActions } from "../slices/authSlice"

const authApis = new AuthApis();
const authValidation = new AuthValidation();

const handleErrors = (err: any) => {
    const error = err?.response?.data?.message || err?.message;
    console.log(error)
    return error
}

export const signinAction = (signinData: SigninData) => async (dispatch: AppDispatch) => {
    dispatch(authActions.loading())
    try {
        const { data } = await authApis.signin(signinData)
        dispatch(authActions.authSuccess({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken
        }))
    } catch (error) {
        dispatch(authActions.error(handleErrors(error)))
    }
}

export const signupAction = (signupData: SignupData) => async (dispatch: AppDispatch) => {
    dispatch(authActions.loading())
    const validate = authValidation.validateAllFields(signupData)
    if (validate === true) {
        try {
            const { data } = await authApis.signup(signupData)
            dispatch(authActions.authSuccess({
                accessToken: data.accessToken,
                refreshToken: data.refreshToken
            }))
        } catch (error) {
            dispatch(authActions.error(handleErrors(error)))
        }
    } else {
        dispatch(authActions.error(validate))
    }
    authValidation.resetError()
}

export const confirmEmailAction = (email: string, token: string) => async (dispatch: AppDispatch) => {
    dispatch(authActions.loading())
    try {
        const { data } = await authApis.confirmEmail(email, token)
        dispatch(authActions.authSuccess({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken
        }))
    } catch (error) {
        dispatch(authActions.error(handleErrors(error)))
    }
}