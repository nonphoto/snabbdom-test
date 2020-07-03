import tagNames from "tag-names";
import { init as snabbdom } from "snabbdom/init";
import { h } from "snabbdom/h";
import { classModule } from "snabbdom/modules/class";
import { propsModule } from "snabbdom/modules/props";
import { eventListenersModule } from "snabbdom/modules/eventlisteners";
import { toVNode } from "snabbdom/tovnode";

export const patch = snabbdom([classModule, propsModule, eventListenersModule]);

let vnode = h("main");
let renderer = null;

export const init = (fn) => {
  if (typeof document !== "undefined") {
    vnode = toVNode(document.querySelector("main"));
    renderer = fn;
  }

  return render;
};

const render = () => {
  if (renderer) {
    const next = h("main", {}, [renderer()]);
    patch(vnode, next);
    vnode = next;
  }
};

export const element = (sel) => (data, state, children) => {
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
        state: node.data.setter || state,
      });
    }
  };

  const prepatch = (prev, next) => {
    next.data.state = prev.data.state;
    next.data.setter = prev.data.setter;

    if (typeof next.data.getChildren === "function") {
      next.children = next.data.getChildren.call(null, {
        state: next.data.setter || state,
      });
    }
  };

  return h(
    sel,
    {
      ...data,
      hook: {
        init,
        prepatch,
      },
      on: {
        click: data.onClick,
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

export const renderChildren = (vnode) => {
  const result = Object.assign({}, vnode);
  let queue = [result];

  while (queue.length !== 0) {
    const current = queue.shift();

    if (typeof current === "object") {
      if (
        typeof current.children === "undefined" &&
        typeof current.data.getChildren === "function"
      ) {
        current.children = current.data.getChildren.call(null, {
          state: current.data.state,
        });
      }

      if (current.children instanceof Array) {
        queue = queue.concat(current.children);
      }
    }
  }

  return result;
};
