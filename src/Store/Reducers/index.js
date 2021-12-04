import { combineReducers } from "redux"

const myReducers = () => {
    return "mmoushere"
}
const deleteReducer = (selectedPost = null, action) => {
    if (action.type === 'DELETE_POST') {
        return action.payload
    }
    return selectedPost
}
const getDataReducer = (state = [], action) => {
    console.log("action come here", action.payload)
    switch (action.type) {
        case 'GET_DATA':
            return action.payload

        default:
            return state


    }
}
const Reducers = combineReducers({
    posts: getDataReducer
})
export default Reducers


