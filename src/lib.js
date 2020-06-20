import tagNames from "tag-names";
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
  return h(selector, data, children);
};

for (let tag of tagNames) {
  element[tag] = element(tag);
}

export const read = (data, getChildren) => {
  const init = (node) => {
    node.children = node.data.getChildren(node.data.initial, (value) => {
      node.data.state = value;
      render();
    });
    node.data.state = node.data.initial;
  };

  const prepatch = (prev, next) => {
    next.children = next.data.getChildren(prev.data.state, (value) => {
      next.data.state = value;
      render();
    });
    next.data.state = prev.data.state;
  };

  return h("div", { ...data, getChildren, hook: { init, prepatch } });
};
