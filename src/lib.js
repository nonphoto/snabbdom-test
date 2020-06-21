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

export const element = (selector) => (props, state, children) => {
  const init = (node) => {
    node.data.setter = {};
    for (let key of Object.keys(state)) {
      Object.defineProperty(node.data.setter, key, {
        set: (value) => {
          node.data.state[key] = value;
          render();
        },
        get: () => node.data.state[key],
      });
    }

    if (typeof node.data.getChildren === "function") {
      node.children = node.data.getChildren.call(null, {
        state: node.data.setter,
        ref: node.elm,
      });
    }
  };

  const prepatch = (prev, next) => {
    next.data.state = prev.data.state;
    next.data.setter = prev.data.setter;

    if (typeof next.data.getChildren === "function") {
      next.children = next.data.getChildren.call(null, {
        state: next.data.setter,
        ref: next.elm,
      });
    }
  };

  return h(
    selector,
    {
      ...props,
      hook: {
        init,
        prepatch,
      },
      on: {
        click: props.onClick,
      },
      state,
      getChildren: typeof children === "function" ? children : undefined,
    },
    typeof children === "function" ? undefined : children
  );
};

for (let tag of tagNames) {
  element[tag] = element(tag);
}
