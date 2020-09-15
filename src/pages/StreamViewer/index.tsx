import React from "react";
import ChatPager from "../../components/ChatPager";
import StreamGrid from "../../components/StreamGrid";
import "./styles.scss";

const StreamViewer: React.FC<{}> = (props) => {
  return (
    <div className="stream-viewer">
      <StreamGrid />
      <ChatPager />
    </div>
  );
};

export default React.memo(StreamViewer);
