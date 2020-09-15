import { IconButton, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import AddStreamModal from "../AddStreamModal";

const AddStreamButton: React.FC<{}> = (props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
    <>
      <Tooltip title="Add Stream">
        <IconButton
          color="inherit"
          aria-label="add-stream"
          onClick={() => setShowModal(!showModal)}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
      {showModal && <AddStreamModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default React.memo(AddStreamButton);
