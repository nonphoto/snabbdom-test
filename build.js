import toHTML from "./snabbdom-to-html.js";
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

async function main() {
  const innerHTML = toHTML(vnode);
  const outerHTML = await Deno.readAll(Deno.stdin);
  const result = new TextDecoder("utf-8")
    .decode(outerHTML)
    .replace(/<main>.*<\/main>/g, `<main>${innerHTML}</main>`);
  await Deno.writeAll(Deno.stdout, new TextEncoder("utf-8").encode(result));
}

main();
