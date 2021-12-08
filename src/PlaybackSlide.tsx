import * as React from "react";

import {Utils} from "liqvid";
const {during, from} = Utils.authoring;

import Link from "@lib/Link";

import {PlaybackPrompt} from "@env/prompts";

export default function PlaybackSlide() {
  return (
    <section id="sec-playback" {...during("playback/")}>
      <h2>Playback</h2>
      <ul>
        <li {...from("playback/loop")}>animation loop simulating a media element advancing in time</li>

        <li {...from("playback/html")}>imitates (but does not fully implement) the <Link href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement">HTMLMediaElement</Link> interface</li>

        <li {...from("playback/hub")}>emits events through <Link href="https://nodejs.org/api/events.html#events_class_eventemitter">EventEmitter</Link> <code>playback.hub</code></li>
      </ul>
      <PlaybackPrompt/>
    </section>
  );
}