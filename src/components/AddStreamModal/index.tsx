import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStream } from "../../services/streams/actions";
import { StreamSource } from "../../services/streams/models";
import {
  getTwitchChannelFromUrl,
  getYoutubeVideoIdFromUrl,
  urlIsTwitch,
  urlIsYoutube,
} from "../../services/streams/utils";
import Modal, { OwnModalProps } from "../Modal";

const AddStreamModal: React.FC<OwnModalProps> = (props) => {
  const { onClose } = props;

  // Redux State
  const dispatch = useDispatch();
  // Own State
  const [url, setUrl] = useState<string>("");

  const addStreamToRedux = React.useCallback(() => {
    if (urlIsTwitch(url)) {
      console.log(getTwitchChannelFromUrl(url));
      dispatch(
        addStream({
          source: StreamSource.twitch,
          lookup: getTwitchChannelFromUrl(url),
        })
      );
    } else if (urlIsYoutube(url)) {
      dispatch(
        addStream({
          source: StreamSource.youtube,
          lookup: getYoutubeVideoIdFromUrl(url),
        })
      );
    }
    onClose();
  }, [url, onClose, dispatch]);

  // Methods
  const onTextFieldChange = React.useCallback((e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setUrl(target.value);
  }, []);

  // Render
  const footerButtons = [
    <Button
      key="accept"
      variant="contained"
      color="primary"
      onClick={addStreamToRedux}
    >
      Add
    </Button>,
  ];
  return (
    <Modal title={"Add Stream"} onClose={onClose} footerButtons={footerButtons}>
      <TextField
        value={url}
        onChange={onTextFieldChange}
        fullWidth={true}
        label="Stream URL"
        variant="filled"
        type="url"
        helperText="Twitch or Youtube URL"
      />
    </Modal>
  );
};

export default React.memo(AddStreamModal);
