import { Application } from "https://deno.land/x/oak/mod.ts";

const moduleShimsContent = await Deno.readTextFile("./lib/es-module-shims.js");

const head = `<script type="importmap-shim" src="/imports.json"></script>`;

const body = `
  <div id="main"></div>
  <script type="module-shim">import main, {init} from "./index.js";init(main)();</script>
  <script type="module">${moduleShimsContent}</script>`;

const app = new Application();

// app.use(async (context, next) => {
//   await next();
//   const rt = context.response.headers.get("X-Response-Time");
//   console.log(`${context.request.method} ${context.request.url} - ${rt}`);
// });

// app.use(async (context, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   context.response.headers.set("X-Response-Time", `${ms}ms`);
// });

// app.use(async (context) => {
//   context.response.body = await renderFileToString(`./template.ejs`, {
//     head,
//     body,
//   });
// });

// app.use(async (context, next) => {
//   await next();
//   console.log(context.response.type);
// });

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/dist`,
    index: "index.html",
  });
});

await app.listen({ port: 8000 });
