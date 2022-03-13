import {useMemo, useRef} from "react";

import {Utils, usePlayer, useTime} from "liqvid";
const {animate, bezier, easings} = Utils.animation,
      {during, from} = Utils.authoring,
      {dragHelperReact} = Utils.interactivity,
      {constrain} = Utils.misc;

import {MEDIA_URL} from "@env/media-url";
import {UtilsPrompt} from "@env/prompts";

import {script} from "./markers";

/* animation */
const rotate = animate({
  endValue: 2 * Math.PI,
  startTime: script.parseStart("utils/animate/fire"),
  duration: 1000,
  easing: bezier(...easings.easeInSine)
});

export default function UtilsSlide() {
  const player = usePlayer();
  
  /* Utils.animation.animate */
  const duck = useRef<HTMLImageElement>();

  useTime(p => {
    duck.current.style.left = `${35 + 15 * Math.cos(p)}%`;
    duck.current.style.top = `${15 - 12.5 * Math.sin(p)}%`;
  }, rotate, []);

  /* Utils.interactivity.dragHelperReact */
  const pig = useRef<HTMLImageElement>();
  const offset = useRef({x: 0, y: 0});
  const pigEvents = useMemo(() => dragHelperReact<HTMLImageElement>(
    // move
    (e, hit) => {
      // prevent from dragging off the page
      const left = constrain(
        0,
        hit.x - offset.current.x - player.canvas.offsetLeft,
        player.canvas.offsetWidth - pig.current.offsetWidth
      ) / player.canvas.offsetWidth;

      const top = constrain(
        0,
        hit.y - offset.current.y - player.canvas.offsetTop,
        player.canvas.offsetHeight - pig.current.offsetHeight
      ) / player.canvas.offsetHeight;

      Object.assign(pig.current.style, {
        left: `${left * 100}%`,
        top: `${top * 100}%`
      });
    },
    // down
    (e, hit) => {
      e.preventDefault();
      const pigDims = pig.current.getBoundingClientRect();
      offset.current.x = hit.x - pigDims.left;
      offset.current.y = hit.y - pigDims.top;

      document.body.classList.add("dragging");
    },
    // up
    () => {
      document.body.classList.remove("dragging");
    }
  ), []);

  return (
    <section id="sec-utils" {...during("utils/")}>
      <h2>Utils</h2>

      <ul>
        <li {...from("utils/animate")}>
          <code>Utils.animation.animate</code>

          <img alt="A cartoon duck" id="utils-duck" src={`${MEDIA_URL}/img/duck.svg`} ref={duck}/>
        </li>
        <li {...from("utils/authoring")}>
          <code>{"Utils.authoring.{during, from}"}</code>
        </li>
        <li {...from("utils/drag")}>
          <code>Utils.interactivity.dragHelperReact</code>

          <img alt="A cartoon pig" className="draggable" id="utils-pig" src={`${MEDIA_URL}/img/pig.svg`} ref={pig} {...pigEvents}/>
        </li>
      </ul>

      <UtilsPrompt/>
    </section>
  );
}
