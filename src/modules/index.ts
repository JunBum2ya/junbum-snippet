import {combineReducers} from "redux";
import todos from "./todos";
import counter from "./counter/reducer";
import sample from "./sample/reducers";

const rootReducer = combineReducers({
   todos,
   counter,
   sample
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>