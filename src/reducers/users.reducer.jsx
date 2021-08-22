import { combineReducers } from 'redux'

const getUsers = (state = {}, action) => {
    switch (action.type) {
        case "GET_USERS_SUCCESS":
          return {
           
            userLists: action.payload,
            errors: null
          }

      case "GET_USERS_FAIL":
          return {
            
            userLists: null,
            errors: action.payload
          }

      default:
        return state;
    }
}
export default combineReducers({
    getUsers
});