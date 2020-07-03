import toHTML from "./lib/snabbdom-to-html.js";
import { styleSheet } from "./lib/glamor.js";
import { renderChildren } from "./mod.js";
import { renderFile } from "https://deno.land/x/dejs/mod.ts";

(async () => {
  const [appPath] = Deno.args;
  const app = await import(appPath);
  const html = toHTML(renderChildren(app.default()));
  const style = styleSheet
    .rules()
    .map((r) => r.cssText)
    .join("");

  const moduleShimsContent = await Deno.readTextFile(
    "./lib/es-module-shims.js"
  );

  const head = `
    <style>${style}</style>
    <script type="importmap-shim" src="/imports.json"></script>
  `;

  const body = `
    <main>${html}</main>
    <script type="module-shim" src="${appPath}"></script>
    <script type="module">${moduleShimsContent}</script>`;

  const output = await renderFile(`./template.ejs`, { head, body });
  await Deno.copy(output, Deno.stdout);
})();
