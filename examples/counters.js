import range from "https://deno.land/x/lodash/range.js";
import { lch } from "https://cdn.pika.dev/d3-color@^1.4.0";
import { element, read } from "../mod.js";
export { init } from "../mod.js";

const counter = ({ color, key }) =>
  read(key, { value: 0 }, ({ state }) => [
    element.button(
      {
        style: { background: color },
        "@click": () => void (state.value += 1),
      },
      state.value.toString()
    ),
  ]);

export default read(null, { count: 5 }, ({ state }) => [
  element.button({ "@click": () => void (state.count -= 1) }, "Less"),
  element.button({ "@click": () => void (state.count += 1) }, "More"),
  ...range(state.count).map((n) => {
    const color = lch(78, 33, (n / state.count) * 360).toString();
    return counter({ key: n, color });
  }),
]);
