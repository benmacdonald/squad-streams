import classNames from "classnames";
import React from "react";
import { ReactComponent as Add } from "./assets/add.svg";

export enum IconType {
  add = "add",
}

const SVGMap: Map<IconType, any> = new Map([[IconType.add, Add]]);

interface Props {
  iconType: IconType;
}

const Icon: React.FC<Props> = (props) => {
  const { iconType } = props;
  const IconType = (SVGMap.get(iconType) as unknown) as React.FC<
    React.SVGProps<SVGSVGElement>
  >;
  return <IconType className={classNames("icon")} />;
};

export default React.memo(Icon);
