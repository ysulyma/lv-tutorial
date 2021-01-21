import * as React from "react";
import {useMemo} from "react";

import {Utils, usePlayer} from "ractive-player";
const {during, from} = Utils.authoring;

import Cursor from "rp-cursor";

import Link from "@lib/Link";

import {MEDIA_URL} from "./media-url";
import {cursorReplay} from "./recordings";
// import {RecordingScript} from "./script";

export default function PlaybackSlide() {
  const {script} = usePlayer();
  const start = useMemo(() => script.parseStart("recording/cursor") + 4000, []);

  return (
    <section id="sec-recording" {...during("recording/")}>
      <h2>Recording</h2>
      <ul>
        <li {...from("recording/npm")}>recording functionality provided by <Link href="https://www.npmjs.com/package/rp-recording">rp-recording</Link></li>

        <li {...from("recording/control")}>implemented as custom control, c.f. <code>index.tsx</code></li>

        <li {...from("recording/https")}>
          can only record audio over HTTPS!
          <Link id="recording-https-link" {...from("recording/link")} href="https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/">How to get HTTPS working on your local development environment</Link>
        </li>

        <li {...from("recording/cursor")}>plugin API, e.g. <Link href="https://www.npmjs.com/package/rp-cursor">rp-cursor</Link></li>
      </ul>

      <Cursor src={`${MEDIA_URL}/img/cursor.svg`} start={start} end={"recording/cursor"} replay={cursorReplay}/>

      {/*<RecordingScript/>*/}
    </section>
  );
}