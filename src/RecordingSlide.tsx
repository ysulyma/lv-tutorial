import {Utils} from "liqvid";
const {during, from} = Utils.authoring;

import {RecordingPrompt} from "@env/prompts";

export default function PlaybackSlide() {
  return (
    <section id="sec-recording" {...during("recording/")}>
      <h2>Recording</h2>
      <ul>
        <li {...from("recording/npm")}>recording functionality provided by <a href="https://www.npmjs.com/package/rp-recording" target="_blank" rel="noreferrer">rp-recording</a></li>

        <li {...from("recording/control")}>implemented as custom control, c.f. <code>index.tsx</code></li>

        <li {...from("recording/https")}>
          can only record audio over HTTPS!
          <a
            id="recording-https-link" {...from("recording/link")}
            href="https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/"
            target="_blank" rel="noreferrer">How to get HTTPS working on your local development environment</a>
        </li>

        <li {...from("recording/plugin")}>plugin API</li>
      </ul>

      <RecordingPrompt/>
    </section>
  );
}