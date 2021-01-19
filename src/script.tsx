/*
  Do not confuse this file with the Script class in ractive-player!
*/

import * as React from "react";
import {Prompt, Cue} from "rp-prompt";

type P = typeof Prompt extends (props: infer T) => JSX.Element ? T : never;

export const IntroScript = (props: P) => (
  <Prompt {...props}>
    <Cue on="intro/">
      ractive-player is a library for making interactive videos, or
    </Cue>
    <Cue on="intro/ractives">
      *ractives*, using HTML, CSS, and Javascript in React.
      <br/>
      What does that mean? Well, the video you are watching is not actually a video, it's HTML and CSS synced up to an audio track using a large quantity of Javascript. For example,
    </Cue>
    <Cue on="intro/fiddle">
      try changing the background color of this video, or the subtitle. I'll pause the video so you can try that out; just click the play button, or click outside of the white box, to continue.
    </Cue>
    <Cue on="intro/pause">
      This tool was originally developed for
    </Cue>
    <Cue on="intro/lmqm">
      my math site, and you can see more interesting examples there. I'm going to work on adding more documentation and expanding this tutorial; for now, probably the easiest
    </Cue>
    <Cue on="intro/get-started">
      way to get started is to clone this video, and then you can see how this works from the source. The rest of this video will make a lot more sense if you're following along in the source code.
    </Cue>
    <Cue on="intro/reddit">
      I've also created a subreddit and you can ask questions there.
      <br/>
      In the rest of this video I'll run through the basic concepts behind it.
    </Cue>
  </Prompt>
);

export const PlaybackScript = (props: P) => (
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
export const ScriptScript = (props: P) => (
  <Prompt {...props}>
    <Cue on="script/">
      Built on top of Playback is the Script class. A Script takes a Playback and
    </Cue>
    <Cue on="script/markers">
      partitions the playback time into named segments called *markers*. That way you can say "start this animation at marker 'my-awesome-animation'" rather than "start this animation at 5:41".
    </Cue>
    <Cue on="script/repeat">
      Markers are allowed to repeat, although that could cause some issuses, but they can't overlap.
    </Cue>
    <Cue on="script/ew">
      There's keyboard controls for this: pressing E will go advance the script by one marker, pressing W will go back one marker. This is very handy when you're developing a ractive, and you'll use it when recording.
    </Cue>
  </Prompt>
);

export const PlayerScript = (props: P) => (
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

export const AnimationScript = (props: P) => (
  <Prompt {...props}>
    <Cue on="animation/">
      This slide is just here to demonstrate Utils.animation.animate
    </Cue>
  </Prompt>
);

export const RecordingScript = (props: P) => (
  <Prompt {...props}>
    <Cue on="recording/">
      Then recording is where you record your audio while advancing through the markers, much like a slide show, so that the audio and markers get synced up.
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
    <Cue on="recording/cursor">
      Then there's a plugin API for custom recorders, see for example the rp-cursor package, which allows you to replay cursor movement, like this
    </Cue>
    <Cue on="recording/cursor-demo"/>
  </Prompt>
);
