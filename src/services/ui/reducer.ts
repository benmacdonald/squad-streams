import { TOGGLE_CHAT, UserInterfaceActionTypes } from "./models";

export class UserInterfaceState {
  isChatOpen: boolean = false;
}

export const reducer = (
  state: UserInterfaceState = new UserInterfaceState(),
  action: UserInterfaceActionTypes
) => {
  switch (action.type) {
    case TOGGLE_CHAT:
      return {
        ...state,
        isChatOpen: action.payload,
      };
    default:
      return state;
  }
};
