import * as React from "react";

import {Player, Utils, usePlayer} from "ractive-player";
const {anyHover} = Utils.mobile;
const {useForceUpdate} = Utils.react;

export default function ShowMarkerName() {
  if (!anyHover)
    return null;
  const {script} = usePlayer();
  const forceUpdate = useForceUpdate();

  React.useEffect(() => {
    script.hub.on("markerupdate", forceUpdate);
  }, []);

  const style: React.CSSProperties = {
    backgroundColor: "#1A69B5",
    fontFamily: `"Roboto Slab", sans-serif`,
    lineHeight: "36px",
    padding: "0 .5em",
    userSelect: "all",
    verticalAlign: "top"
  };

  return (
    <span className="rp-marker-name" key="show-marker-name" style={style}>
      {script.markerName}
    </span>
  );
}
