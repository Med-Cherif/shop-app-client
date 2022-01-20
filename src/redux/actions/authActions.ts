import AuthApis, { SigninData, SignupData } from "../../apis/authApi";
import AuthValidation from "../../validation/authValidation";
import { AppDispatch, RootState } from "../store";
import { authActions } from "../slices/authSlice"
import { NavigateFunction } from "react-router-dom";

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

export const confirmEmailAction = (email: string, token: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { auth } = getState()
    const userEmail = (auth as any).userData?.email as string;

    if (userEmail === email) {
        dispatch(authActions.loading())
        try {
            const { data } = await authApis.confirmEmail(userEmail, token)
            dispatch(authActions.authSuccess({
                accessToken: data.accessToken,
                refreshToken: data.refreshToken
            }))
        } catch (error) {
            dispatch(authActions.error(handleErrors(error)))
        }
    } else {
        dispatch(authActions.error("That is not your email address"))
    }
}

export const logoutAction = (naviagte: NavigateFunction) => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { auth } = getState()
    const userId = (auth as any).userData._id as string;
    if (!userId) return;

    try {
        await authApis.signout(userId)
        dispatch(authActions.logout())
        naviagte('/login')
    } catch (error) {
        dispatch(authActions.error(handleErrors(error)))
    }
}
