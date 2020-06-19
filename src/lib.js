import { h, init as snabbdom } from "snabbdom/snabbdom";
import classModule from "snabbdom/modules/class";
import propsModule from "snabbdom/modules/props";
import styleModule from "snabbdom/modules/style";
import eventModule from "snabbdom/modules/eventlisteners";
import toVNode from "snabbdom/tovnode";

const patch = snabbdom([classModule, propsModule, styleModule, eventModule]);

let vnode = toVNode(document.getElementById("root"));

let renderer = null;

export const init = (fn) => {
  renderer = fn;
  return render;
};

const render = () => {
  if (renderer) {
    const next = renderer();
    patch(vnode, next);
    vnode = next;
  }
};

export const element = (selector) => (data, children) => {
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

export const read = (data, getChildren) => {
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
