import React from "react";

interface Props {
  channelName: string;
}

const TwitchPlayer: React.FC<Props> = (props) => {
  const { channelName } = props;

  return (
    <iframe
      title={channelName}
      src={`https://player.twitch.tv/?channel=${channelName}&parent=localhost&autoplay=false`}
      frameBorder="0"
      scrolling="no"
      allowFullScreen={true}
      height="100%"
      width="100%"
    />
  );
};

export default React.memo(TwitchPlayer);
