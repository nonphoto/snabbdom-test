import toHTML from "./snabbdom-to-html.js";
import main from "./src/main.js";
import { readFileStrSync } from "https://deno.land/std/fs/mod.ts";

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
      });
    }

    if (current.children instanceof Array) {
      queue = queue.concat(current.children);
    }
  }
}

const innerHTML = toHTML(vnode);
const outerHTML = readFileStrSync(Deno.args[0], { encoding: "utf8" });
const result = outerHTML.replace(
  /<main>.*<\/main>/g,
  `<main>${innerHTML}</main>`
);
console.log(result);
