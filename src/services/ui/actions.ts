import { TOGGLE_CHAT, UserInterfaceActionTypes } from "./models";

export const toggleChat = (state: boolean): UserInterfaceActionTypes => {
  return {
    type: TOGGLE_CHAT,
    payload: state,
  };
};
