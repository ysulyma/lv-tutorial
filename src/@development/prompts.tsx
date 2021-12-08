/*
  This provides prompts to read from when recording. For the "production" build,
  it is commented out. You could choose to leave it in though, e.g. for accessibility.
*/

import * as React from "react";
import {Prompt, Cue} from "rp-prompt";

type P = typeof Prompt extends (props: infer T) => JSX.Element ? T : never;

export const IntroPrompt = (props: P) => (
  <Prompt {...props}>
    <Cue on="intro/">
      Liqvid is a library for making interactive videos using the same tools you use to make webpages: HTML, CSS, and Javascript in React.
      <br/>
      The video you are watching is not actually a video file, it's HTML and CSS synced up to an audio track using a large quantity of Javascript. For example,
    </Cue>
    <Cue on="intro/fiddle">
      try changing the background color of this video, or the subtitle. I'll pause the video so you can try that out; just click the play button, or click outside of the white box, to continue.
    </Cue>
    <Cue on="intro/pause">
      Even without interactivity,
    </Cue>
    <Cue on="intro/pros">
      this format is much smaller than a traditional video, and the video quality is perfect. It's also much easier to
    </Cue>
    <Cue on="intro/edit">
      develop and edit videos—even after a video's recorded, you can go and make changes just by changing a few lines of CSS. Making it easier to develop videos was really my original motivation for developing this library, and the interactivity was a happy side effect. In exchange, you have to deal with browser inconsistencies, which is so much fun.
      <br/>
      I use this for
    </Cue>
    <Cue on="intro/epiplexis">
      my math site, and you can see more interesting examples there.
      <br/>
      This video is a tutorial for if you want to start making these yourself. It does assume you're pretty comfortable with web development. To get started,
    </Cue>
    <Cue on="intro/get-started">
      you should clone the repository for this video, and then you can see how this works from the source. The rest of this video will make a lot more sense if you're following along in the source code.
    </Cue>
    <Cue on="intro/discord">
      I've also created a Discord and you can ask questions there.
      <br/>
      In the rest of this video, I'll show off some of the cool things you can do with this, using the different packages that are available for it. So put the flashy stuff up front. And then I'll go through the fundamental concepts behind it.
    </Cue>
  </Prompt>
);

export const CodeMirrorPrompt = (props: P) => (
  <Prompt {...props}>
    <Cue on="codemirror/">
      So here is an interactive coding lesson. I'm typing into the Code tab, and then in the Playground tab is another editor where you can experiment with the code yourself. The copy button will copy whatever's in my buffer into yours. And then you can run the code and clear the output console.
    </Cue>
  </Prompt>
);

export const CursorPrompt = (props: P) => (
  <Prompt {...props}>
    <Cue on="cursor/">
      You can record your cursor pointing to something on the screen while you're talking.
    </Cue>
  </Prompt>
);

export const PaintPrompt = (props: P) => (
  <Prompt {...props}>
    <Cue on="paint/">
      There's also a package for freehand drawing. You can change colors, erase, and so on.
      <br/>
      So now let me go through how this all works.
    </Cue>
  </Prompt>
);

export const PlaybackPrompt = (props: P) => (
  <Prompt {...props}>
    <Cue on="playback/">
      The core of the library is the Playback class. This is just
    </Cue>
    <Cue on="playback/loop">
      a standard requestAnimationFrame loop that simulates a media element being played. It
    </Cue>
    <Cue on="playback/html">
      imitates the HTMLMediaElement interface to a certain extent, although it doesn't actually implement it. And then it dispatches
    </Cue>
    <Cue on="playback/hub">
      events through an EventEmitter called playback.hub, that things can subscribe to. (All the EventEmitters in this library are called Hub, which comes from MathJax.)
    </Cue>
  </Prompt>
);

// lmao
export const ScriptPrompt = (props: P) => (
  <Prompt {...props}>
    <Cue on="script/">
      Built on top of Playback is the Script class. A Script takes a Playback and
    </Cue>
    <Cue on="script/markers">
      partitions the playback time into named segments called *markers*. That way you can say "start this animation at marker 'my-awesome-animation'" rather than "start this animation at 5:41".
    </Cue>
    <Cue on="script/repeat">
      Markers are allowed to repeat, but they can't overlap.
    </Cue>
    <Cue on="script/ew">
      There's keyboard controls for this: pressing E will go advance the script by one marker, pressing W will go back one marker. This is very handy when you're developing a ractive, and you'll use it when recording.
    </Cue>
  </Prompt>
);

export const PlayerPrompt = (props: P) => (
  <Prompt {...props}>
    <Cue on="player/">
      So if those two classes are the engine of the library, the Player class is the shiny exterior.
    </Cue>
    <Cue on="player/gui">
      This is a big fancy GUI that imitates a web video player.
    </Cue>
    <Cue on="player/react">
      It's important to point out this is the first place we use React. This is a React component, this whole library's written in React, and so are all the plugins for it. Eventually it would be good to have a port to Vue and Web Components, etc. But Playback and Script aren't at all aware of React.
    </Cue>
    <Cue on="player/hook">
      This also functions as the global context for the video, you can access it with the usePlayer() hook
    </Cue>
  </Prompt>
);

export const UtilsPrompt = (props: P) => (
  <Prompt {...props}>
    <Cue on="utils/">
      There's a large library of utility helpers. Here I'll just mention a few of them, and again look in the source code for how to use these.
    </Cue>
    <Cue on="utils/animate">
      First, Utils.animation.animate is a helper for creating animations. So
    </Cue>
    <Cue on="utils/animate/fire">
      here's an animated duck.
    </Cue>
    <Cue on="utils/authoring">
      The ones you'll be using the most often are during and from. "From" will tell a piece of content to appear at a certain marker, and optionally go away at a certain marker. So like I just revealed this list item; this works a lot like PowerPoint slides. "During" is, you give it a prefix, and the content will be visible as long as the marker name starts with that prefix.
    </Cue>
    <Cue on="utils/drag">
      And then there's also a helper for drag functionality. So here's a pig that you can drag around the screen. I'll give you a few seconds to try that out (or you might want to pause the video).
      <br/>
      So once you've coded your ractive, you want to record it.
    </Cue>
  </Prompt>
);

export const RecordingPrompt = (props: P) => (
  <Prompt {...props}>
    <Cue on="recording/">
      So recording is where you record your audio while advancing through the markers, again much like a slide show, so that the audio and markers get synced up.
    </Cue>
    <Cue on="recording/npm">
      Recording functionality is in a separate package called rp-recording.
    </Cue>
    <Cue on="recording/control">
      This is implemented as a custom control, so see index.tsx of this video for how to enable it.
    </Cue>
    <Cue on="recording/https">
      Beware that in order to record audio you have to access the page over HTTPS;
    </Cue>
    <Cue on="recording/link">
      here's a useful link on how to get that set up on a local domain.
    </Cue>
    <Cue on="recording/plugin">
      Then there's a plugin API for custom recorders. So the coding, cursor movement, and drawing functionality that we saw at the beginning of the video were all examples of that.
    </Cue>
  </Prompt>
);
