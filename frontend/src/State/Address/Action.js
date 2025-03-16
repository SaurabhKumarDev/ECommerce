import { FIND_ADDRESS_BY_ID_FAILURE, FIND_ADDRESS_BY_ID_REQUEST, FIND_ADDRESS_BY_ID_SUCCESS,  } from "./ActionType";
import { api } from "../../config/apiConfig";

export const findAddressByUserId = () => async (dispatch) => {
    dispatch({ type: FIND_ADDRESS_BY_ID_REQUEST })

    try {
        const { data } = await api.get(`/api/address`)

        dispatch({ type: FIND_ADDRESS_BY_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: FIND_ADDRESS_BY_ID_FAILURE, payload: error.message })
    }
}