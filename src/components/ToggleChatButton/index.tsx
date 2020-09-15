import { IconButton, Tooltip } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import SpeakerNotesOffIcon from "@material-ui/icons/SpeakerNotesOff";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../redux/reducer";
import { Stream } from "../../services/streams/models";
import { toggleChat } from "../../services/ui/actions";

const ToggleChatButton: React.FC<{}> = (props) => {
  // Redux State
  const dispatch = useDispatch();

  const streamMap = useSelector<ReduxState, Map<string, Stream>>(
    (state) => state.stream.streams
  );
  const isChatOpen = useSelector<ReduxState, boolean>(
    (state) => state.ui.isChatOpen
  );

  // Methods
  const onClick = React.useCallback(() => {
    dispatch(toggleChat(!isChatOpen));
  }, [isChatOpen, dispatch]);

  if (streamMap.size <= 0) {
    return null;
  }
  return (
    <Tooltip title={isChatOpen ? "Collapse Chat" : "Open Chat"}>
      <IconButton
        edge="end"
        color="inherit"
        aria-label={isChatOpen ? "collapse-chat" : "open-chat"}
        onClick={onClick}
      >
        {isChatOpen ? <SpeakerNotesOffIcon /> : <ChatIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default React.memo(ToggleChatButton);
