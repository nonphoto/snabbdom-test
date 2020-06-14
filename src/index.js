import { h, init } from "snabbdom/snabbdom";
import classModule from "snabbdom/modules/class";
import propsModule from "snabbdom/modules/props";
import styleModule from "snabbdom/modules/style";
import eventModule from "snabbdom/modules/eventlisteners";
import toVNode from "snabbdom/tovnode";
import { range } from "lodash";
import { lch } from "d3-color";

const patch = init([classModule, propsModule, styleModule, eventModule]);

let vnode = toVNode(document.getElementById("root"));

const render = (next) => {
  patch(vnode, next);
  vnode = next;
};

const main = () => {
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

  return h("div", { style: { display: "flex", margin: "1rem" } }, swatches);
};

render(main());
