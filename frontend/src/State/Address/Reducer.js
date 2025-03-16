import { FIND_ADDRESS_BY_ID_FAILURE, FIND_ADDRESS_BY_ID_REQUEST, FIND_ADDRESS_BY_ID_SUCCESS } from "./ActionType"

const initialState = {
    addresses: [],
    loading: false,
    error: null
}

export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ADDRESS_BY_ID_REQUEST:
            return { ...state, loading: true, error: null }

        case FIND_ADDRESS_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, addresses: action.payload }

        case FIND_ADDRESS_BY_ID_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
} 