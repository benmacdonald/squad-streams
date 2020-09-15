import { Button, Drawer, MobileStepper } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/reducer";
import { Stream } from "../../services/streams/models";
import StreamChat from "../StreamChat";
import "./styles.scss";

const ChatPager: React.FC<{}> = (props) => {
  // Redux State
  const isChatOpen = useSelector<ReduxState, boolean>(
    (state) => state.ui.isChatOpen
  );
  const streamMap = useSelector<ReduxState, Map<string, Stream>>(
    (state) => state.stream.streams
  );

  // Own State
  const [activeStep, setActiveStep] = useState<number>(0);

  const streams = Array.from(streamMap.values());

  if (streams.length === 0) {
    return null;
  }

  return (
    <Drawer
      className="chat-pager"
      variant="persistent"
      anchor="right"
      open={isChatOpen}
      style={{
        width: isChatOpen ? "340px" : "0px",
      }}
      classes={{
        paper: "chat-pager__paper",
      }}
    >
      {streams.map((stream, idx) => {
        return (
          <StreamChat key={idx} stream={stream} visible={idx === activeStep} />
        );
      })}
      <MobileStepper
        variant="dots"
        steps={streams.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={() => setActiveStep(activeStep + 1)}
            disabled={activeStep >= streams.length - 1}
          >
            Next
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={() => setActiveStep(activeStep - 1)}
            disabled={activeStep <= 0}
          >
            Back
          </Button>
        }
      />
    </Drawer>
  );
};

export default React.memo(ChatPager);
