import { combineReducers } from "redux";
import {
  reducer as StreamReducer,
  StreamState,
} from "../services/streams/reducer";

export interface ReduxState {
  stream: StreamState;
}

export const rootReducer = combineReducers<ReduxState>({
  stream: StreamReducer,
});
