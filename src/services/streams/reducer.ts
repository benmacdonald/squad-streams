import { ADD_STREAM, Stream, StreamActionTypes } from "./models";

export class StreamState {
  streams: Map<string, Stream> = new Map();
}

export const reducer = (
  state: StreamState = new StreamState(),
  action: StreamActionTypes
) => {
  switch (action.type) {
    case ADD_STREAM:
      const stream = action.payload;
      const map = new Map(state.streams);
      map.set(stream.lookup, stream);
      return {
        ...state,
        streams: map,
      };
    default:
      return state;
  }
};
