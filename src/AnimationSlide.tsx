import * as React from "react";
import {useMemo} from "react";

import {Utils, usePlayer, useTimeUpdate} from "ractive-player";
const {animate} = Utils.animation,
      {during} = Utils.authoring;

import {AnimationPrompt} from "./prompts";

import * as BezierEasing from "bezier-easing";
const easeInSine = [0.47, 0, 0.745, 0.715] as const;

export default function AnimationSlide() {
  const {script} = usePlayer();
  
  const ref = React.useRef<HTMLSpanElement>();
  const rotate = useMemo(() => animate({
    endValue: 2 * Math.PI,
    startTime: script.parseStart("animation/fire"),
    duration: 1000,
    easing: BezierEasing(...easeInSine)
  }), []);

  useTimeUpdate(t => {
    const p = rotate(t);
    ref.current.style.left = `${50 + 20 * Math.cos(p)}%`;
    ref.current.style.top = `${50 - 20 * Math.sin(p)}%`;
  }, []);

  return (
    <section id="sec-animation" {...during("animation/")}>
      <span ref={ref} style={{position: "absolute", left: "50%", top: "50%",textAlign: "center"}}>whoa</span>
      <AnimationPrompt/>
    </section>
  );
}