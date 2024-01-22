import { ON_CHANGE } from "./actionTypes"
export const onChange = (e) => {
    return {
        type: ON_CHANGE,
        payload: {
            name: e.target.name,
            value: e.target.value
        }
    }
}