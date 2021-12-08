import * as React from "react";

import {Utils} from "liqvid";
const {during, from} = Utils.authoring;

import {PlayerPrompt} from "@env/prompts";

export default function PlayerSlide() {
  return (
    <section id="sec-player" {...during("player/")}>
      <h2>Player</h2>

      <ul>
        <li {...from("player/gui")}>GUI: scrubber bar, controls, bells, whistles</li>

        <li {...from("player/react")}>depends on React (<code>Playback</code> and <code>Script</code> do not!)</li>

        <li {...from("player/hook")}>access with <code>usePlayer()</code></li>
      </ul>

      <PlayerPrompt/>
    </section>
  );
}