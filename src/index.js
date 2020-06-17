import { h, init } from "snabbdom/snabbdom";
import classModule from "snabbdom/modules/class";
import propsModule from "snabbdom/modules/props";
import styleModule from "snabbdom/modules/style";
import eventModule from "snabbdom/modules/eventlisteners";
import toVNode from "snabbdom/tovnode";
import { range } from "lodash";
import { lch } from "d3-color";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventModule,
  {
    create: (_, vnode) => {
      if (!vnode.write) {
        const key = Symbol(vnode.key);
        vnode.write = (value) => {
          state[key] = value;
        };
      }
    },
  },
]);

let vnode = toVNode(document.getElementById("root"));

const render = () => {
  const next = main();
  console.log("main", next);
  patch(vnode, next);
  vnode = next;
};

const element = (selector) => (data, children) => {
  return h(
    selector,
    data,
    typeof children === "function" ? children(0, () => {}) : children
  );
};

element.div = element("div");

const createWrite = (node) => (value) => {
  node.data.state = value;
  render();
};

const read = (initialState, fn) => {
  const init = (node) => {
    node.children = node.data.fn(initialState, createWrite(node));
    node.data.state = initialState;
  };

  const prepatch = (prev, next) => {
    next.children = next.data.fn(prev.data.state, createWrite(next));
    next.data.state = prev.data.state;
  };

  return { fn, hook: { init, prepatch } };
};

const main = () => {
  const count = 8;

  const swatches = range(count).map((n) => {
    const color = lch(78, 33, (n * 360) / count).toString();
    return element.div({
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
      ...read(0, (value, write) => [
        element.div(
          {
            on: {
              click: () => {
                write(value + 1);
              },
            },
          },
          value.toString()
        ),
      ]),
    });
  });

  return element.div(
    {
      style: { display: "flex", margin: "1rem" },
    },
    swatches
  );
};

render();
