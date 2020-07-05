import range from "https://deno.land/x/lodash/range.js";
import { lch } from "https://cdn.pika.dev/d3-color@^1.4.0";
import { element } from "../mod.js";
export { init } from "../mod.js";

const counter = ({ color, key }) =>
  element.div({ key, state: { value: 0 } }, ({ state }) => [
    element.button(
      {
        style: { background: color },
        "@click": () => void (state.value += 1),
      },
      state.value.toString()
    ),
  ]);

export default element.div(
  {
    state: { count: 5 },
    style: {
      display: "flex",
      flexDirection: "row",
      "& button": {
        fontSize: "1rem",
        border: "none",
        padding: "0.2em",
        margin: "0.1rem",
        borderRadius: "0.2rem",
      },
    },
  },
  ({ state }) => [
    element.button({ "@click": () => void (state.count -= 1) }, "Less"),
    element.button({ "@click": () => void (state.count += 1) }, "More"),
    ...range(state.count).map((n) => {
      const color = lch(78, 33, (n / state.count) * 360).toString();
      return counter({ key: n, color });
    }),
  ]
);
