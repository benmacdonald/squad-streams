import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/reducer";
import { Stream } from "../../services/streams/models";
import StreamPlayer from "../StreamPlayer";
import "./styles.scss";

// [
//   {
//     source: StreamSource.youtube,
//     lookup: "5qap5aO4i9A",
//   },
//   {
//     source: StreamSource.twitch,
//     lookup: "nickeh30",
//   },
//   {
//     source: StreamSource.twitch,
//     lookup: "timthetatman",
//   },
//   {
//     source: StreamSource.twitch,
//     lookup: "ninja",
//   },
// ];

const StreamGrid: React.FC<React.PropsWithChildren<{}>> = (props) => {
  // Redux State
  const streamMap: Map<string, Stream> = useSelector<
    ReduxState,
    Map<string, Stream>
  >((state) => state.stream.streams);

  const streams: Stream[] = Array.from(streamMap.values());
  return (
    <div
      className={classNames("stream-grid", {
        [`grid--${streams.length}`]: streams.length,
      })}
    >
      {streams.map((stream, idx) => {
        return (
          <StreamPlayer
            key={idx}
            className={`stream-${idx + 1}`}
            stream={stream}
          />
        );
      })}
    </div>
  );
};

export default React.memo(StreamGrid);
