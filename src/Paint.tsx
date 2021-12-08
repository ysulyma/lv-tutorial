import * as React from "react";
import {useMemo} from "react";

import {Utils, usePlayer, useTimeUpdate} from "liqvid";
const {animate} = Utils.animation,
      {during} = Utils.authoring;

import {PaintCanvas, PaintReplay} from "rp-paint";
// import PaintRecorderPlugin from "rp-paint/recorder";

import {PaintPrompt} from "@env/prompts";

export default function PaintSlide() {

  return (
    <section id="sec-paint" {...during("paint/")}>
      {/*<PaintCanvas recorder={PaintRecorderPlugin.recorder}/>*/}
      {<PaintReplay
        replay={window.recordings.paint}
        start="paint/"/>}
      <PaintPrompt/>
    </section>
  );
}
