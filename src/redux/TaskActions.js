import { ActionTypes } from "./ActionTypes"
export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user
    }
}




