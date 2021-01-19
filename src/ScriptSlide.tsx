import * as React from "react";

import {Utils} from "ractive-player";
const {during, from} = Utils.authoring;

// import {ScriptScript} from "./script";

export default function ScriptSlide() {
  return (
    <section id="sec-script" {...during("script/")}>
      <h2>Script</h2>
      <ul>
        <li {...from("script/markers")}>partitions a Playback into named segments called <dfn>markers</dfn></li>

        <li {...from("script/repeat")}>markers can repeat (experimental), cannot overlap</li>

        <li {...from("script/ew")}>press <kbd>E</kbd> to advance a marker, <kbd>W</kbd> to go back one marker</li>
      </ul>

      {/*<ScriptScript/>*/}
    </section>
  );
}