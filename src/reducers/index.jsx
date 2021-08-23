import { combineReducers } from 'redux'
import userReducer from "./users.reducer";


const reducers = {
    userReducer
};

const appReducer = combineReducers(reducers);
const rootReducer = (state, action) => {
    return appReducer(state, action);
}
export default rootReducer;