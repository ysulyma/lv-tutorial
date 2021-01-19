import type {Player} from "ractive-player";

/*
By default ArrowLeft and ArrowRight perform seeking. This rebinds them so that
a clicker can be used to navigate the slides.
*/

export default (player: Player) => {
  const {keymap, script} = player;
  
  for (const h of keymap.getHandlers("ArrowLeft"))
    keymap.unbind("ArrowLeft", h);
  for (const h of keymap.getHandlers("ArrowRight"))
    keymap.unbind("ArrowRight", h);

  keymap.bind("ArrowLeft", script.back);
  keymap.bind("ArrowRight", script.forward);
}
