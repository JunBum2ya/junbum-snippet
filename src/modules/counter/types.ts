import {ActionType} from "typesafe-actions";
import {actions} from "./actions";

export type CounterAction = ActionType<typeof actions>;