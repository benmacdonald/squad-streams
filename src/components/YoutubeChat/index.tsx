import React from "react";

interface Props {
  videoId: string;
}

const YoutubeChat: React.FC<Props> = (props) => {
  const { videoId } = props;
  // const iframeRef = React.useRef<HTMLIFrameElement | null>(null);

  // React.useEffect(() => {
  //   iframeRef.current?.addEventListener("load", (event) => {
  //     console.log(event.currentTarget);
  //     const document = (event.target as HTMLIFrameElement).contentWindow
  //       ?.document;
  //     console.log(document);
  //   });
  //   // html?.setAttribute("dark", "true");
  // }, [iframeRef]);

  return (
    <iframe
      title={videoId}
      width="100%"
      height="100%"
      src={`https://www.youtube.com/live_chat?darkpopout&v=${videoId}&embed_domain=localhost`}
      frameBorder="0"
      allow="autoplay"
      allowFullScreen={true}
    ></iframe>
  );
};

export default React.memo(YoutubeChat);
