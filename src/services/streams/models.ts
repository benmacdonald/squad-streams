export enum StreamSource {
  twitch = "TWITCH",
  youtube = "YOUTUBE",
}

export interface Stream {
  source: StreamSource;
  lookup: string;
}

// Redux Models
export const ADD_STREAM = "ADD_STREAM";

interface AddStreamAction {
  type: typeof ADD_STREAM;
  payload: Stream;
}

export type StreamActionTypes = AddStreamAction;
