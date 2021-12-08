import * as React from "react";
import {Player} from "liqvid";

import {RecordingControl} from "rp-recording";

import CodeRecorderPlugin from "rp-codemirror/recorder";
import CursorRecorderPlugin from "rp-cursor/recorder";
import PaintRecorderPlugin from "rp-paint/recorder";

import ShowMarkerName from "@lib/ShowMarkerName";

export const controls = (<>
  {Player.defaultControlsLeft}

  <div className="rp-controls-right">
    {/* handy when developing */}
    {/*<ShowMarkerName/>*/}

    {/* record audio, markers, and more */}
    <RecordingControl/>

    {Player.defaultControlsRight}
  </div>
</>);