import { makeStyles, Paper, Toolbar, Typography } from "@material-ui/core";
import React, { PropsWithChildren, ReactNode } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import ModalOverlay from "../ModalOverlay";
import "./styles.scss";

const useStyles = makeStyles((theme) => {
  return {
    header: {},
    footer: {
      justifyContent: "flex-end",
    },
  };
});

export interface OwnModalProps {
  title?: string;
  footerButtons?: ReactNode[];

  // Action Responders
  onClose: () => void;
}

const Modal: React.FC<PropsWithChildren<OwnModalProps>> = (props) => {
  const { children, title, footerButtons, onClose } = props;
  const classes = useStyles();

  const outsideClickRef = React.useRef<HTMLDivElement | null>(null);

  const onOutsideClick = React.useCallback(() => {
    onClose();
  }, [onClose]);

  useOnClickOutside([outsideClickRef], onOutsideClick);

  return (
    <ModalOverlay>
      <Paper ref={outsideClickRef} className="modal" elevation={3}>
        {title && (
          <Toolbar className={classes.header}>
            <Typography variant="h6">{title}</Typography>
          </Toolbar>
        )}
        <div className="modal__content">{children}</div>
        {footerButtons && footerButtons?.length > 0 && (
          <Toolbar className={classes.footer}>{footerButtons}</Toolbar>
        )}
      </Paper>
    </ModalOverlay>
  );
};

export default React.memo(Modal);
