import React from "react";
import StreamGrid from "../../components/StreamGrid";
import "./styles.scss";

const StreamViewer: React.FC<{}> = (props) => {
  return (
    <div className="stream-viewer">
      <StreamGrid />
    </div>
  );
};

export default React.memo(StreamViewer);
