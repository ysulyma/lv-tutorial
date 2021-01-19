import type {Playback} from "ractive-player";
import {Utils} from "ractive-player";
const {timeRegexp} = Utils.time;

const rgx = new RegExp(
  "(?:^\\?|&)t=(" +
  timeRegexp.toString().replace(/^\/\^|\$\/$/g, "") +
  ")"
);

export default (playback: Playback) => {
  const $_ = parent.location.search.match(rgx);
  if ($_) {
    playback.seek($_[1]);
  }
};
