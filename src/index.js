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
element.button = element("button");

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

const main = () =>
  element.div({
    style: { display: "flex", margin: "1rem" },
    ...read(5, (count, setCount) => [
      element.button(
        {
          style: {
            padding: "1rem",
          },
          on: { click: () => setCount(count + 1) },
        },
        "more"
      ),
      element.button(
        {
          style: {
            padding: "1rem",
          },
          on: { click: () => setCount(count - 1) },
        },
        "less"
      ),
      ...range(count).map((n) => {
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
          ...read(0, (value, setValue) => [
            element.div(
              {
                on: {
                  click: () => {
                    setValue(value + 1);
                  },
                },
              },
              value.toString()
            ),
          ]),
        });
      }),
    ]),
  });

render();
