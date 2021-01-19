import * as React from "react";
import * as ReactDOM from "react-dom";

import {Audio, Controls, IdMap, Script, Player} from "ractive-player";
// import {RecordingControl} from "rp-recording";
// import ThumbCapture from "rp-thumb-capture";
// import CursorRecorderPlugin from "rp-cursor/recorder";

// @libr
// import HelpControl from "@lib/HelpControl";
// import LoadingScreen from "@lib/LoadingScreen";
// import ShowMarkerName from "@lib/ShowMarkerName";
import rebindArrowKeys from "@lib/rebind-arrow-keys";
//import rememberVolumeSettings from "@lib/remember-volume";
import seekOnLoad from "@lib/seekonload";

// resources
import {MEDIA_URL} from "./media-url";
import objects from "./objects";
import markers from "./markers";

// slides
import Intro from "./Intro";
import PlaybackSlide from "./PlaybackSlide";
import ScriptSlide from "./ScriptSlide";
import PlayerSlide from "./PlayerSlide";
import AnimationSlide from "./AnimationSlide";
import RecordingSlide from "./RecordingSlide";

const controls = (<>
  {Player.defaultControlsLeft}

  <div className="rp-controls-right">
    {/*<ShowMarkerName/>*/}

    {/* generate thumbnails */}
    {/*<ThumbCapture/>*/}

    {/* record audio, markers, cursor */}
    {/*<RecordingControl plugins={[CursorRecorderPlugin]}/>*/}

    <Controls.Settings/>
    {/*<HelpControl/>*/}
    <Controls.FullScreen/>
  </div>
</>);

function Ractive() {
  const playerRef = React.useRef<Player>();

  React.useEffect(() => {
    const player = playerRef.current;

    rebindArrowKeys(player);
    // rememberVolumeSettings(player.playback);

    player.canPlay.then(() => {
      // use this when working on a particular section
      // player.playback.seek(player.script.parseStart("player/"));

      // seek to time if URL includes e.g. ?t=1:11
      seekOnLoad(player.playback);
      player.ready();
    });
  }, []);

  const script = new Script(markers);
  const ps = script.parseStart;

  const highlights = [
    {title: "Playback", time: ps("playback/")},
    {title: "Script", time: ps("script/")},
    {title: "Player", time: ps("player/")},
    {title: "Recording", time: ps("recording/")}
  ];

  const thumbData = {
    cols: 5,
    rows: 5,
    height: 100,
    width: 160,
    frequency: 4,
    path: `${MEDIA_URL}/thumbs/%s.png`,
    highlights
  };

  return (
    <Player controls={controls} ref={playerRef} script={script} thumbs={thumbData}>
      {/*<LoadingScreen/>*/}
      {<Audio start={0}>
        <source src={`${MEDIA_URL}/audio/audio.webm`} type="audio/webm"/>
        <source src={`${MEDIA_URL}/audio/audio.mp4`} type="audio/mp4"/>
      </Audio>}
      <IdMap map={objects}>
        <Intro/>
        <PlaybackSlide/>
        <ScriptSlide/>
        <PlayerSlide/>
        <AnimationSlide/>
        <RecordingSlide/>
      </IdMap>
    </Player>
  );
}

ReactDOM.render(<Ractive/>, document.querySelector("main"));
