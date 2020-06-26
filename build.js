import toHTML from "https://jspm.dev/snabbdom-to-html";
import main from "./src/main.js";

let vnode = main();
let queue = [vnode];

while (queue.length !== 0) {
  const current = queue.shift();

  if (typeof current === "object") {
    if (
      typeof current.children === "undefined" &&
      typeof current.data.getChildren === "function"
    ) {
      current.children = current.data.getChildren.call(null, {
        state: current.data.state,
        state: "hello",
      });
    }

    if (current.children instanceof Array) {
      queue = queue.concat(current.children);
    }
  }
}

console.log(toHTML(vnode));
console.log(Deno.args);
