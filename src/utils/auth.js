import Cookies from "js-cookie"

export const setAuthToken = (token) => {
    Cookies.set("token", token);
}

export const getAuthToken = () => {
    return Cookies.get("token");
}