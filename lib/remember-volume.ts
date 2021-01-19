import type {Playback} from "ractive-player";

export default (playback: Playback) => {
  const storage = window.localStorage;

  // restore volume settings
  playback.volume = parseFloat(storage.getItem("ractive volume") || "1");
  playback.muted = "true" === (storage.getItem("ractive muted") || "false");

  // save volume settings
  playback.hub.on("volumechange", () => {
    storage.setItem("ractive muted", playback.muted.toString());
    storage.setItem("ractive volume", playback.volume.toString());
  });
}
