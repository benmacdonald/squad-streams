import { combineReducers } from "redux";
import {
  reducer as StreamReducer,
  StreamState,
} from "../services/streams/reducer";
import {
  reducer as UserInterfaceReducer,
  UserInterfaceState,
} from "../services/ui/reducer";

export interface ReduxState {
  stream: StreamState;
  ui: UserInterfaceState;
}

export const rootReducer = combineReducers<ReduxState>({
  stream: StreamReducer,
  ui: UserInterfaceReducer,
});
