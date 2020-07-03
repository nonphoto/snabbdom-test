import { element, init } from "../mod.js";
import range from "https://deno.land/x/lodash/range.js";
import { lch } from "https://cdn.pika.dev/d3-color@^1.4.0";

const counter = ({ color, ...other }) =>
  element.div(other, { value: 0 }, ({ state }) => [
    element.button(
      {
        style: { background: color },
        onClick: () => void (state.value += 1),
      },
      {},
      state.value.toString()
    ),
  ]);

const main = () =>
  element.div(
    { style: { display: "flex", margin: "1rem" } },
    { count: 5 },
    ({ state }) => [
      element.button({ onClick: () => void (state.count -= 1) }, {}, "Less"),
      element.button({ onClick: () => void (state.count += 1) }, {}, "More"),
      ...range(state.count).map((n) => {
        const color = lch(78, 33, (n * 360) / state.count).toString();
        return counter({ key: n, color });
      }),
    ]
  );

export default main;

init(main)();
