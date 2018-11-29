import {createStore,combineReducers} from "redux";
import numReducers from "./reducers/numReducers";
import tabReducers from "./reducers/tabReducers";

let Readucers = combineReducers({
    numReducers,
    tabReducers
})
const store = createStore(Readucers);
export default store;