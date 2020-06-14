import { h, init } from "snabbdom/snabbdom";
import classModule from "snabbdom/modules/class";
import propsModule from "snabbdom/modules/props";
import styleModule from "snabbdom/modules/style";
import eventModule from "snabbdom/modules/eventlisteners";

import { range } from "lodash";
import { lch } from "d3-color";

const count = 8;
const swatches = range(count).map((n) => {
  const color = lch(78, 33, (n * 360) / count).toString();
  return h("div", {
    style: {
      width: "4rem",
      height: "4rem",
      background: color,
      borderRadius: "100vw",
      marginLeft: "-1rem",
      border: "solid 0.2rem white",
    },
  });
});

const patch = init([classModule, propsModule, styleModule, eventModule]);

patch(
  document.getElementById("root"),
  h("div", { style: { margin: "1rem", display: "flex" } }, swatches)
);
