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

const read = (data, getChildren) => {
  const init = (node) => {
    node.children = node.data.getChildren(node.data.initial, createWrite(node));
    node.data.state = node.data.initial;
  };

  const prepatch = (prev, next) => {
    next.children = next.data.getChildren(prev.data.state, createWrite(next));
    next.data.state = prev.data.state;
  };

  return h("div", { ...data, getChildren, hook: { init, prepatch } });
};

const button = (text, onClick) =>
  element.button({ on: { click: onClick } }, text);

const counter = (key, color) =>
  read({ initial: 0, key }, (value, setValue) => [
    element.button(
      {
        style: { background: color },
        on: { click: () => void setValue(value + 1) },
      },
      value.toString()
    ),
  ]);

const main = () =>
  read(
    {
      initial: 5,
      style: { display: "flex", margin: "1rem" },
    },
    (count, setCount) => [
      button("Less", () => void setCount(count - 1)),
      button("More", () => void setCount(count + 1)),
      ...range(count).map((n) => {
        const color = lch(78, 33, (n * 360) / count).toString();
        return counter(n, color);
      }),
    ]
  );

render();
