import tagNames from "https://cdn.pika.dev/react-tag-names@^1.0.0";
import { init as snabbdom } from "https://cdn.pika.dev/snabbdom@1.0.1/init";
import { h } from "https://cdn.pika.dev/snabbdom@1.0.1/h";
import { propsModule } from "https://cdn.pika.dev/snabbdom@1.0.1/modules/props";
import { eventListenersModule } from "https://cdn.pika.dev/snabbdom@1.0.1/modules/eventlisteners";
import { toVNode } from "https://cdn.pika.dev/snabbdom@1.0.1/tovnode";
import { css } from "./lib/glamor.js";

export const patch = snabbdom([propsModule, eventListenersModule]);

export const init = (fn, selector = "#main") => {
  let vnode = toVNode(document.querySelector(selector));

  const render = () => {
    const next = h(vnode.sel, {}, [fn({ render })]);
    patch(vnode, next);
    vnode = next;
  };

  return render;
};

const createMutator = (o, fn) => {
  const p = {};
  for (let key of Object.keys(o)) {
    const privateKey = `_${key}`;
    p[privateKey] = o[key];
    Object.defineProperty(p, key, {
      set: (value) => {
        p[privateKey] = value;
        fn.call(null, key, value);
      },
      get: () => p[privateKey],
    });
  }
  return p;
};

export const read = (key, state, fn) => (context) => {
  const init = (node) => {
    node.data.state = createMutator(state, context.render);
    node.children = node.data.fn
      .call(null, {
        ...context,
        state: node.data.state,
      })
      .map((child) => child.call(null, context));
  };

  const prepatch = (prev, next) => {
    next.data.state = prev.data.state;
    next.children = next.data.fn
      .call(null, {
        ...context,
        state: next.data.state,
      })
      .map((child) => child.call(null, context));
  };

  return h("div", { key, hook: { init, prepatch }, fn, state });
};

export const element = (selector) => (data, children) => (context) => {
  return h(
    selector,
    {
      ...data,
      props: {
        className: data.style ? css(data.style) : "",
      },
      on: {
        click: data.onClick,
      },
    },
    children instanceof Array
      ? children.map((child) => child.call(null, context))
      : children
  );
};

for (let tag of tagNames) {
  element[tag] = element(tag);
}

export const prebuild = (fn) => {
  const context = { render: () => {} };
  const result = fn.call(null, context);
  let queue = [result];

  while (queue.length !== 0) {
    const current = queue.shift();

    if (typeof current === "object") {
      if (
        typeof current.children === "undefined" &&
        typeof current.data.fn === "function"
      ) {
        current.children = current.data.fn.call(null, {
          state: current.data.state,
        });
      }

      if (current.children instanceof Array) {
        queue = queue.concat(
          current.children.map((child) => child.call(null, context))
        );
      }
    }
  }

  return result;
};
