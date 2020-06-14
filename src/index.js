import { h, init } from "snabbdom/snabbdom";
import classModule from "snabbdom/modules/class";
import propsModule from "snabbdom/modules/props";
import styleModule from "snabbdom/modules/style";
import eventModule from "snabbdom/modules/eventlisteners";
import toVNode from "snabbdom/tovnode";
import { range, merge } from "lodash";
import { lch } from "d3-color";

const patch = init([classModule, propsModule, styleModule, eventModule]);

let vnode = toVNode(document.getElementById("root"));

const render = (f) => {
  const next = f();
  patch(vnode, next);
  vnode = next;
};

const element = (selector) => (...args) => {
  const props = [];
  const children = [];

  for (let arg of args) {
    if (typeof arg === "object") {
      if (typeof arg.sel === "string") {
        children.push(arg);
      } else {
        props.push(arg);
      }
    }

    if (typeof arg === "string" || typeof arg === "number") {
      children.push(arg.toString());
    }
  }

  return h(selector, merge(...props), children);
};

element.div = element("div");

let state = {};

const store = (key, initialState, callback) => {
  return [
    {
      hook: {
        init: ({ key }) => {
          state[key] = initialState;
        },
        destroy: ({ key }) => {
          delete state[key];
        },
      },
    },
    ...callback(state[key] || initialState, (next) => {
      state[key] = next;
      render(main);
    }),
  ];
};

const main = () => {
  const count = 8;
  const swatches = range(count).map((n) => {
    const color = lch(78, 33, (n * 360) / count).toString();
    return element.div(
      {
        key: n,
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
          background: color,
          borderRadius: "100vw",
          border: "solid 0.2rem white",
          marginLeft: "-1rem",
          padding: "1rem 2rem",
          userSelect: "none",
        },
      },
      ...store(n, 0, (v, set) => [{ on: { click: () => set(v + 1) } }, v])
    );
  });

  return element.div(...swatches, {
    style: { display: "flex", margin: "1rem" },
  });
};

render(main);
