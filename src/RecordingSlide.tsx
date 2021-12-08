import * as React from "react";
import {useMemo} from "react";

import {Utils, usePlayer} from "liqvid";
const {during, from} = Utils.authoring;

import Link from "@lib/Link";

import {MEDIA_URL} from "@env/media-url";
import {RecordingPrompt} from "@env/prompts";

export default function PlaybackSlide() {
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

        <li {...from("recording/plugin")}>plugin API</li>
      </ul>

      <RecordingPrompt/>
    </section>
  );
}