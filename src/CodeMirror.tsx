import {useRef} from "react";

import {Utils} from "liqvid";
const {getJSON} = Utils.json;

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
    <section id="sec-codemirror" data-during="codemirror/">
      <CodeBooth
        interpreter={interpreter.current}
        mode="javascript"
        /*
        Uncomment this to record typing
        */
        // recorder={CodeRecorderPlugin.recorder}
        replay={getJSON("recordings").code}
        start="codemirror/"
        theme="monokai"
      />

      <CodeMirrorPrompt/>
    </section>
  );
}
