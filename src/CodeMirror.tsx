import * as React from "react";
import {useCallback, useEffect, useMemo, useRef} from "react";

import {Player, Utils, usePlayer} from "liqvid";
const {during} = Utils.authoring,
      {dragHelperReact} = Utils.interactivity,
      {constrain} = Utils.misc,
      {onClick} = Utils.mobile;

// import CodeRecorderPlugin from "rp-codemirror/recorder";
import {CodeBooth} from "rp-codebooth";
import type {Interpreter} from "rp-codebooth";

import JSInterpreter from "@lib/JSInterpreter";

import {CodeMirrorPrompt} from "@env/prompts";

export default function CodeMirrorSlide() {
  const interpreter = useRef<Interpreter>();
  if (!interpreter.current) {
    interpreter.current = new JSInterpreter();
  }

  return (
    <section id="sec-codemirror" {...during("codemirror/")}>
      <CodeBooth
        interpreter={interpreter.current}
        mode="javascript"
        /*
        Uncomment this to record typing
        */
        // recorder={CodeRecorderPlugin.recorder}
        replay={window.recordings.code}
        start="codemirror/"
        theme="monokai"
      />

      <CodeMirrorPrompt/>
    </section>
  );
}
