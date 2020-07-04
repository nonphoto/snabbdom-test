import toHTML from "./lib/snabbdom-to-html.js";
import { styleSheet } from "./lib/glamor.js";
import { prebuild } from "./mod.js";
import { renderFile } from "https://deno.land/x/dejs/mod.ts";

(async () => {
  const [appPath] = Deno.args;
  const app = await import(appPath);
  const htmlContent = toHTML(prebuild(app.default));
  const styleContent = styleSheet
    .rules()
    .map((r) => r.cssText)
    .join("");

  const scriptContent = `
    import main, {init} from "${appPath}";
    init(main)();
  `;

  const moduleShimsContent = await Deno.readTextFile(
    "./lib/es-module-shims.js"
  );

  const head = `
    <style>${styleContent}</style>
    <script type="importmap-shim" src="/imports.json"></script>`;

  const body = `
    <div id="main">${htmlContent}</div>
    <script type="module-shim">${scriptContent}</script>
    <script type="module">${moduleShimsContent}</script>`;

  const output = await renderFile(`./template.ejs`, { head, body });
  await Deno.copy(output, Deno.stdout);
})();
