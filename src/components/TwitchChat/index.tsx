import React from "react";

interface Props {
  channelName: string;
}
const TwitchChat: React.FC<Props> = (props) => {
  const { channelName } = props;
  return (
    <>
      <iframe
        title={`${channelName}-chat`}
        frameBorder="0"
        scrolling="scrolling"
        src={`https://www.twitch.tv/embed/${channelName}/chat?darkpopout&parent=localhost&parent=squad-streams.web.app`}
        height="100%"
        width="100%"
      />
    </>
  );
};

export default React.memo(TwitchChat);
