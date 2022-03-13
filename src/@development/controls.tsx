import ShowMarkerName from "@lib/ShowMarkerName";
import CodeRecording from "rp-codemirror/recorder";
import CursorRecording from "rp-cursor/recorder";
import PaintRecording from "rp-paint/recorder";
import {RecordingControl} from "rp-recording";

export const controls = [<ShowMarkerName/>,<RecordingControl plugins={[CodeRecording, CursorRecording, PaintRecording]}/>];

// import {rebindArrowKeys} from "@lib/rebind-arrow-keys";
// rebindArrowKeys(player);
