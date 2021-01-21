import * as React from "react";
import {Player} from "ractive-player";

export default function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const {children, ...attrs} = props;
  return <a onMouseUp={Player.preventCanvasClick} target="_blank" {...attrs}>{children}</a>
}
