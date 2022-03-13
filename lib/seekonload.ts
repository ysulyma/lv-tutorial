import type {Playback} from "liqvid";
import {Utils} from "liqvid";
const {parseTime, timeRegexp} = Utils.time;

const rgx = new RegExp(
  "(?:^\\?|&)t=(" +
  timeRegexp.toString().replace(/^\/\^|\$\/$/g, "") +
  ")"
);

export function seekOnLoad(playback: Playback) {
  const $_ = parent.location.search.match(rgx);
  if ($_) {
    playback.seek(parseTime($_[1]));
  }
};

export default seekOnLoad;
