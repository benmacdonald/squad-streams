import { Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Stream, StreamSource } from "../../services/streams/models";
import TwitchChat from "../TwitchChat";
import YoutubeChat from "../YoutubeChat";
import "./styles.scss";

interface Props {
  stream: Stream;
  visible: boolean;
}

const StreamChat: React.FC<Props> = (props) => {
  const { stream, visible } = props;

  const loadChannelChat = React.useCallback(() => {
    switch (stream.source) {
      case StreamSource.twitch:
        return <TwitchChat channelName={stream.lookup} />;
      case StreamSource.youtube:
        return <YoutubeChat videoId={stream.lookup} />;
      default:
        return null;
    }
  }, [stream]);
  return (
    <div
      className="stream-chat"
      style={{
        display: visible ? "flex" : "none",
      }}
    >
      <Toolbar>
        <Typography variant="h6">{stream.lookup}</Typography>
      </Toolbar>
      <div className="stream-chat__embedded">{loadChannelChat()}</div>
    </div>
  );
};

export default React.memo(StreamChat);
