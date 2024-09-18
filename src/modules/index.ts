import {combineReducers} from "redux";
import todos from "./todos";
import counter from "./counter/reducer";

const rootReducer = combineReducers({
   todos,
   counter
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>