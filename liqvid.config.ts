// liqvid.config.ts
import type {LiqvidConfig} from "@liqvid/cli";

const os = require("os");

const config: LiqvidConfig = {
  audio: {
    transcribe: {
      "input": "./dist/audio/audio.webm",
      "captions": "./dist/captions.vtt",
      "transcript": "./dist/transcript.json",
      "apiKey": "ho6IutFyHawhFGGID3vU2PEz7_46-WKHTr6zhPNDU7e_",
      "apiUrl": "https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/ad816af7-c138-4671-8c42-7e4e7fdd5151"
    }
  },
  render: {
    audioFile: "./dist/audio/audio.webm",
    concurrency: os.cpus().length,
    imageFormat: "png"
  },
  thumbs: {
    url: "http://localhost:3000/dist",
    browserHeight: 800,
    browserWidth: 1280,
    concurrency: os.cpus().length,
    frequency: 1,
    imageFormat: "png",
    // make sure the output pattern matches the imageFormat
    output: "./dist/thumbs/%s.png"
  }
};

module.exports = config;