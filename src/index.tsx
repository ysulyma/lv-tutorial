import * as ReactDOM from "react-dom";

import {Audio, IdMap, Player, Utils} from "liqvid";
const {loadAllJSON} = Utils.json;

/* resources */
import {MEDIA_URL} from "@env/media-url";
import {highlights, script} from "./markers";
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

function Tutorial() {
  const thumbs = {
    frequency: 1,
    path: `${MEDIA_URL}/thumbs/%s.png`,
    highlights
  };

  return (
    <Player controls={controls} script={script} thumbs={thumbs}>
      <IdMap map={objects}>
        <Audio>
          <source src={`${MEDIA_URL}/audio/audio.webm`} type="audio/webm"/>
          <source src={`${MEDIA_URL}/audio/audio.mp4`} type="audio/mp4"/>
        </Audio>

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

// load recordings JSON
loadAllJSON().then(() => {
  ReactDOM.render(<Tutorial/>, document.querySelector("main"));
});

import "./types";
