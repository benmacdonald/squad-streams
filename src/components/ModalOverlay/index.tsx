import React, { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

const ModalPortal: React.FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;

  const [el, setEl] = React.useState<HTMLElement | null>(null);
  const modalPortalRoot = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = document.createElement("div");
    modalPortalRoot.current = document.getElementById("modal-portal");
    modalPortalRoot.current?.appendChild(el);
    setEl(el);

    return () => {
      if (el?.parentNode === modalPortalRoot.current) {
        modalPortalRoot.current?.removeChild(el);
      }
    };
  }, [modalPortalRoot]);

  if (el !== null) {
    return ReactDOM.createPortal(children, el);
  }
  return null;
};

const ModalOverlay: React.FC<PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  return (
    <ModalPortal>
      <div className="modal-overlay">{children}</div>
    </ModalPortal>
  );
};

export default React.memo(ModalOverlay);
