import { ADD_STREAM, Stream, StreamActionTypes } from "./models";

export const addStream = (stream: Stream): StreamActionTypes => {
  return {
    type: ADD_STREAM,
    payload: stream,
  };
};
