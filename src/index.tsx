import * as React from "react";
import * as ReactDOM from "react-dom";

/* ractive-player and such */
import {Audio, Controls, IdMap, Script, Player} from "liqvid";

/* @lib */
// import HelpControl from "@lib/HelpControl";
// import LoadingScreen from "@lib/LoadingScreen";
import rebindArrowKeys from "@lib/rebind-arrow-keys";
//import rememberVolumeSettings from "@lib/remember-volume";
import seekOnLoad from "@lib/seekonload";

/* resources */
import {MEDIA_URL} from "@env/media-url";
import markers from "./markers";
import objects from "./objects";

/* slides */
import Intro from "./Intro";

import CMSlide from "./CodeMirror";
import CursorSlide from "./Cursor";
import PaintSlide from "./Paint";

import PlaybackSlide from "./PlaybackSlide";
import ScriptSlide from "./ScriptSlide";
import PlayerSlide from "./PlayerSlide";
import UtilsSlide from "./UtilsSlide";
import RecordingSlide from "./RecordingSlide";

import {controls} from "@env/controls";

function Ractive() {
  const playerRef = React.useRef<Player>();

  React.useEffect(() => {
    const player = playerRef.current;

    rebindArrowKeys(player);
    // rememberVolumeSettings(player.playback);

    player.canPlay.then(() => {
      // use this when working on a particular section
      // player.playback.seek(player.script.parseStart("paint/"));

      // seek to time if URL includes e.g. ?t=1:11
      seekOnLoad(player.playback);
      player.ready();
    });
  }, []);

  const script = new Script(markers);
  const ps = script.parseStart;

  const highlights = [
    {title: "Codebooth", time: ps("codemirror/")},
    {title: "Cursor", time: ps("cursor/")},
    {title: "Paint", time: ps("paint/")},
    {title: "Playback", time: ps("playback/")},
    {title: "Script", time: ps("script/")},
    {title: "Player", time: ps("player/")},
    {title: "Utils", time: ps("utils/")},
    {title: "Recording", time: ps("recording/")}
  ];

  const thumbData = {
    cols: 5,
    rows: 5,
    height: 100,
    width: 160,
    frequency: 1,
    path: `${MEDIA_URL}/thumbs/%s.png`,
    highlights
  };

  return (
    <Player controls={controls} ref={playerRef} script={script} thumbs={thumbData}>
      <IdMap map={objects}>
        {/*<LoadingScreen/>*/}
        {<Audio start={0}>
          <source src={`${MEDIA_URL}/audio/audio.webm`} type="audio/webm"/>
          <source src={`${MEDIA_URL}/audio/audio.mp4`} type="audio/mp4"/>
        </Audio>}

        <Intro/>
        
        <CMSlide/>
        <CursorSlide/>
        <PaintSlide/>

        <PlaybackSlide/>
        <ScriptSlide/>
        <PlayerSlide/>
        <UtilsSlide/>
        <RecordingSlide/>
      </IdMap>
    </Player>
  );
}

ReactDOM.render(<Ractive/>, document.querySelector("main"));
