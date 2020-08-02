import toHTML from "./lib/snabbdom-to-html.js";
import { styleSheet } from "./lib/glamor.js";
import { prebuild } from "./mod.js";
import { renderFileToString } from "https://deno.land/x/dejs/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";
import * as fs from "https://deno.land/std/fs/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";

const args = flags.parse(Deno.args);
const inPath = path.normalize(args._[0]);
const outPath = path.normalize(args.outfile);

(async () => {
  const app = await import("./" + inPath);
  const htmlContent = toHTML(prebuild(app.default));
  const styleContent = styleSheet
    .rules()
    .map((r) => r.cssText)
    .join("");

  const moduleShimsContent = await Deno.readTextFile(
    "./lib/es-module-shims.js"
  );

  const head = `
    <style>${styleContent}</style>
    <script type="importmap-shim" src="/imports.json"></script>`;

  const body = `
    <div id="main">${htmlContent}</div>
    <script type="module-shim">import main, {init} from "./index.js";init(main)();</script>
    <script type="module">${moduleShimsContent}</script>`;

  const output = await renderFileToString(`./template.ejs`, { head, body });
  await fs.ensureFile(outPath);
  await Deno.writeTextFile(outPath, output);
})();
