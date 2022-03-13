import {Script} from "liqvid";

/**
Press W to go back one marker, E to go forward one marker.

To record markers, enable Markers in the rp-recording dialog. Then press E to advance a marker.
*/

export const markers = [
  ["intro/", "0:20.955"],
  ["intro/fiddle", "0:10.532"],
  ["intro/pause", "0:02.86"],
  ["intro/pros", "0:07.839"],
  ["intro/edit", "0:23.233"],
  ["intro/epiplexis", "0:13.506"],
  ["intro/get-started", "0:10.553"],
  ["intro/discord", "0:18.732"],
  ["codemirror/", "1:17.46"],
  ["cursor/", "0:19.917"],
  ["paint/", "0:41.562"],
  ["playback/", "0:05.529"],
  ["playback/loop", "0:06.91"],
  ["playback/html", "0:11.408"],
  ["playback/hub", "0:18.520"],
  ["script/", "0:06.785"],
  ["script/markers", "0:18.733"],
  ["script/repeat", "0:04.978"],
  ["script/ew", "0:13.193"],
  ["player/", "0:07.99"],
  ["player/gui", "0:04.626"],
  ["player/react", "0:22.742"],
  ["player/hook", "0:12.14"],
  ["utils/", "0:10.142"],
  ["utils/animate", "0:06.258"],
  ["utils/animate/fire", "0:02.996"],
  ["utils/authoring", "0:32.398"],
  ["utils/drag", "0:16.945"],
  ["recording/", "0:09.351"],
  ["recording/npm", "0:04.425"],
  ["recording/control", "0:09.547"],
  ["recording/https", "0:09.489"],
  ["recording/link", "0:05.975"],
  ["recording/plugin", "0:12.37"]
] as [string, string][];

export const script = new Script(markers);
export const playback = script.playback;

// use this when working on a particular section
// playback.seek(script.parseStart("utils/"));

export const highlights = [
  {title: "Codebooth", time: script.parseStart("codemirror/")},
  {title: "Cursor", time: script.parseStart("cursor/")},
  {title: "Paint", time: script.parseStart("paint/")},
  {title: "Playback", time: script.parseStart("playback/")},
  {title: "Script", time: script.parseStart("script/")},
  {title: "Player", time: script.parseStart("player/")},
  {title: "Utils", time: script.parseStart("utils/")},
  {title: "Recording", time: script.parseStart("recording/")}
];

/*
// remember volume settings
import {rememberVolume} from "@lib/remember-volume";
rememberVolume(playback);

// seek to time if URL includes e.g. ?t=1:11
import {seekOnLoad} from "@lib/seekonload";
seekOnLoad(playback);
*/
