import jwtDecode from "jwt-decode";

const nameAPP = "chemo"

export const getAccessToken = () => {
    let token: any = localStorage.getItem(nameAPP)
    if (token === "null" || token === "undefined" || !token) {
        return null
    }
    token = JSON.parse(token);
    let accessToken = token?.accessToken;
    if (!accessToken) {
        return null;
    }

    return accessToken
}

export const getRefreshToken = () => {
    let token: any = localStorage.getItem(nameAPP)
    if (token === "null" || token === "undefined" || !token) {
        return null
    }
    token = JSON.parse(token);
    let refreshToken = token?.refreshToken;
    if (!refreshToken) {
        return null;
    }

    return refreshToken
}

export const getUserData = () => {
    const accessToken = getAccessToken()
    if (!accessToken) return null
    try {
        const userData = jwtDecode(accessToken)
        if(!userData) return null;
        return userData
    } catch (error) {
        return null;
    }
}