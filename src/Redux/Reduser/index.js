import { combineReducers } from "redux";
import UseReduser from "./UseReduser";

const rootReduser = combineReducers({
    user : UseReduser
})
    export default rootReduser;  //exporting the root reducer  to the store.js file