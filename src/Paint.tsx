import {Utils} from "liqvid";
const {getJSON} = Utils.json;
import {PaintCanvas, PaintReplay} from "rp-paint";
// import PaintRecorderPlugin from "rp-paint/recorder";

import {PaintPrompt} from "@env/prompts";

export default function PaintSlide() {
  return (
    <section id="sec-paint" data-during="paint/">
      {/*<PaintCanvas recorder={PaintRecorderPlugin.recorder}/>*/}
      {<PaintReplay
        replay={getJSON("recordings").paint}
        start="paint/"/>}
      <PaintPrompt/>
    </section>
  );
}
