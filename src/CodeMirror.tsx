import * as React from "react";
import {useCallback, useEffect, useMemo, useRef} from "react";

import {Player, Utils, usePlayer} from "ractive-player";
const {during} = Utils.authoring,
      {dragHelperReact} = Utils.interactivity,
      {constrain} = Utils.misc,
      {onClick} = Utils.mobile;

// import CodeRecorderPlugin from "rp-codemirror/recorder";
import {CodeBooth} from "rp-codebooth";
import type {Interpreter} from "rp-codebooth";

import JSInterpreter from "@lib/JSInterpreter";

import {codeRecording} from "./recordings";
import {CodeMirrorPrompt} from "./prompts";

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
        replay={codeRecording}
        start="codemirror/"
        theme="monokai"
      />

      <CodeMirrorPrompt/>
    </section>
  );
}
