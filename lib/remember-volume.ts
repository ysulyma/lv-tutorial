import type {Playback} from "liqvid";

/**
Remember volume settings between views.

This is disabled by default due to GPDR.
*/

export function rememberVolume(playback: Playback) {
  const storage = window.localStorage;

  // restore volume settings
  playback.volume = parseFloat(storage.getItem("liqvid volume") || "1");
  playback.muted = "true" === (storage.getItem("liqvid muted") || "false");

  // save volume settings
  playback.on("volumechange", () => {
    storage.setItem("liqvid muted", playback.muted.toString());
    storage.setItem("liqvid volume", playback.volume.toString());
  });
}

export default rememberVolume;
