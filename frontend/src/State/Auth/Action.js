import { API_BASE_URL } from "../../config/apiConfig"
import axios from "axios"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType";

const token = localStorage.getItem("jwt");

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {

    dispatch(registerRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData)
        const user = response.data;

        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        console.log("User - ",user);
        dispatch(registerSuccess(user.jwt));
    } catch (error) {
        dispatch(registerFailure(error.message));
    }
}

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {

    dispatch(loginRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData)
        const user = response.data;

        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt)
        }
        console.log("User - ",user);
        dispatch(loginSuccess(user.jwt));
    } catch (error) {
        dispatch(loginFailure(error.message));
    }
}

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserError = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {

    dispatch(getUserRequest())

    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                "authorization": `Bearer ${jwt}`
            }
        }, )
        const user = response.data;
        console.log("User - ",user);
        dispatch(getUserSuccess(user));
    } catch (error) {
        dispatch(getUserError(error.message));
    }
}

export const logout = (dispatch) => {
    dispatch({ type: LOGOUT, payload: null })
    localStorage.clear();
}