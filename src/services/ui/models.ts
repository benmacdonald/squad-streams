export const TOGGLE_CHAT = "TOGGLE_CHAT";

interface ToggleChatAction {
  type: typeof TOGGLE_CHAT;
  payload: boolean;
}

export type UserInterfaceActionTypes = ToggleChatAction;
