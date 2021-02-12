import * as React from "react";
import {useCallback, useState} from "react";

import {IdMap, Player, Utils, usePlayer, useTimeUpdate} from "ractive-player";
const {during, from} = Utils.authoring,
      {between} = Utils.misc;

import Link from "@lib/Link";

import {MEDIA_URL} from "./media-url";
import {IntroPrompt} from "./prompts";

export default function Intro() {
  const player = usePlayer();

  // color changing
  const onChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    player.canvas.style.backgroundColor = e.currentTarget.value;
  }, []);

  // text changing
  const [text, setText] = useState("A library for interactive videos in HTML/CSS/JS");
  const onChangeText = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  }, []);

  // pausing
  const m = React.useMemo(() => player.script.parseStart("intro/pause"), []);
  const prev = React.useRef(player.playback.currentTime);
  const EPSILON = 300;
  useTimeUpdate(t => {
    if (between(m - EPSILON, prev.current, m) && between(m, t, m + EPSILON)) {
      player.playback.pause();
    }
    prev.current = t;
  }, []);

  return (
    <IdMap>
      <section id="sec-intro" {...during("intro/")}>
        <h1>
          <span className="ractive"><img alt="R" src={`${MEDIA_URL}/img/R.svg`}/>active</span>
          <span className="player"><img alt="P" src={`${MEDIA_URL}/img/P.svg`}/>layer</span>
        </h1>
        <h2>{text}</h2>

        <dfn id="dfn-ractives"><Link href="https://en.wikipedia.org/wiki/The_Diamond_Age">(ractives)</Link></dfn>

        <div className="box" id="fiddle" {...from("intro/fiddle")} onMouseUp={Player.preventCanvasClick}>
          <p>Try changing the background color:
            <input onChange={onChangeColor} type="color"/>
          </p>

          <p>Or the subtitle:</p>
          <textarea
            onBlur={player.resumeKeyCapture} onFocus={player.suspendKeyCapture}
            onChange={onChangeText} value={text}/>
        </div>

        <div className="box" {...from("intro/pros")}>
          <p>Much smaller than a traditional video file</p>
          <p {...from("intro/edit")}>Very easy to make edits—no waiting for video export</p>
          <p {...from("intro/epiplexis")}>More examples at <Link href="https://epiplexis.xyz">Epiplexis</Link></p>
        </div>

        <div className="box" id="get-started" {...from("intro/get-started")}>
          <p>Clone this tutorial: <Link href="https://github.com/ysulyma/rp-tutorial">https://github.com/ysulyma/rp-tutorial</Link></p>
        
          <p {...from("intro/reddit")}>Discussion: <Link href="https://reddit.com/r/ractive_player/">https://reddit.com/r/ractive_player/</Link></p>
        </div>

        {/*<Link href="https://en.wikipedia.org/wiki/The_Diamond_Age" id="diamond-age">
        <img src="https://covers.openlibrary.org/b/id/8598269-L.jpg"/>
      </Link>*/}

        {<IntroPrompt/>}
      </section>
    </IdMap>
  );
}
