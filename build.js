import toHTML from "./snabbdom-to-html.js";
import { styleSheet } from "./src/glamor.js";
import app from "./src/main.js";

let vnode = app();
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

const style = styleSheet
  .rules()
  .map((r) => r.cssText)
  .join("");

async function main() {
  const innerHTML = toHTML(vnode);
  const outerHTML = await Deno.readAll(Deno.stdin);
  const result = new TextDecoder("utf-8")
    .decode(outerHTML)
    .replace(/<main>.*<\/main>/g, `<main>${innerHTML}</main>`)
    .replace(/<style id="_glam">.*<\/style>/g, `<style>${style}</style>`);
  await Deno.writeAll(Deno.stdout, new TextEncoder("utf-8").encode(result));
}

main();
