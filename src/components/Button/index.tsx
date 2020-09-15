import React from "react";
import Icon, { IconType } from "../Icon";
import "./styles.scss";

interface Props {
  iconType?: IconType;
  title?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<Props> = (props) => {
  const { iconType, title, onClick } = props;
  return (
    <button className="button" onClick={onClick}>
      {iconType && <Icon iconType={iconType} />}
      <div className="button__title">{title}</div>
    </button>
  );
};

export default React.memo(Button);
