import * as React from "react";
import {Player} from "liqvid";

export default function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const {children, ...attrs} = props;
  return <a target="_blank" {...attrs}>{children}</a>
}
