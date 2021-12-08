import * as React from "react";
import {useCallback, useState} from "react";

import {IdMap, Player, Utils, usePlayer, useTimeUpdate} from "liqvid";
const {during, from} = Utils.authoring,
      {between} = Utils.misc;

import Link from "@lib/Link";

import {MEDIA_URL} from "@env/media-url";
import {IntroPrompt} from "@env/prompts";

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
          <img alt="Liqvid" src={`${MEDIA_URL}/img/logo.png`}/>
          Liqvid
        </h1>
        <h2>{text}</h2>

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
          <p>Clone this tutorial: <Link href="https://github.com/ysulyma/lv-tutorial">https://github.com/ysulyma/lv-tutorial</Link></p>
        
          <p {...from("intro/discord")}>Discussion: <Link href="https://discord.gg/u8Qab99zHx">https://discord.gg/u8Qab99zHx</Link></p>
        </div>

        {/*<Link href="https://en.wikipedia.org/wiki/The_Diamond_Age" id="diamond-age">
        <img src="https://covers.openlibrary.org/b/id/8598269-L.jpg"/>
      </Link>*/}

        {<IntroPrompt/>}
      </section>
    </IdMap>
  );
}
