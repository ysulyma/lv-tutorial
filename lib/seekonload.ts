import type {Playback} from "liqvid";
import {Utils} from "liqvid";
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
