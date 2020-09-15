import React from "react";

interface Props {
  videoId: string;
}

const YoutubePlayer: React.FC<Props> = (props) => {
  const { videoId } = props;
  return (
    <iframe
      title={videoId}
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="autoplay"
      allowFullScreen={true}
    ></iframe>
  );
};

export default React.memo(YoutubePlayer);
