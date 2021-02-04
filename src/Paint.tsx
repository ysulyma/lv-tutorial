import * as React from "react";
import {useMemo} from "react";

import {Utils, usePlayer, useTimeUpdate} from "ractive-player";
const {animate} = Utils.animation,
      {during} = Utils.authoring;

import {PaintCanvas, PaintReplay} from "rp-paint";
// import PaintRecorderPlugin from "rp-paint/recorder";

import {paintReplay} from "./recordings";
import {PaintPrompt} from "./prompts";

export default function PaintSlide() {

  return (
    <section id="sec-paint" {...during("paint/")}>
      {/*<PaintCanvas recorder={PaintRecorderPlugin.recorder}/>*/}
      {<PaintReplay
        replay={paintReplay}
        start="paint/"/>}
      <PaintPrompt/>
    </section>
  );
}
