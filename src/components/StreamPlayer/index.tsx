import classNames from "classnames";
import React from "react";
import { Stream, StreamSource } from "../../services/streams/models";
import TwitchPlayer from "../TwitchPlayer";
import YoutuberPlayer from "../YoutuberPlayer";

interface Props {
  stream: Stream;
  className?: string;
}

const StreamPlayer: React.FC<Props> = (props) => {
  const { stream, className } = props;

  const loadChannelPlayer = React.useCallback(() => {
    switch (stream.source) {
      case StreamSource.twitch:
        return <TwitchPlayer channelName={stream.lookup} />;
      case StreamSource.youtube:
        return <YoutuberPlayer videoId={stream.lookup} />;
      default:
        return null;
    }
  }, [stream]);
  return (
    <div className={classNames("stream-player", className)}>
      {loadChannelPlayer()}
    </div>
  );
};

export default React.memo(StreamPlayer);
