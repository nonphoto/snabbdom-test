import { element } from "./lib.js";
import { lch } from "d3-color";

const counter = ({ color, ...other }) =>
  element.div(other, { value: 0 }, ({ state }) => [
    element.button(
      {
        style: { background: color },
        onClick: () => void (state.value += 1),
      },
      {},
      state.value
    ),
  ]);

export default () =>
  element.div(
    { style: { display: "flex", margin: "1rem" } },
    { count: 5 },
    ({ state }) => [
      element.button({ onClick: () => void (state.count -= 1) }, {}, "Less"),
      element.button({ onClick: () => void (state.count += 1) }, {}, "More"),
      ...[0, 1, 2, 3, 4].map((n) => {
        const color = lch(78, 33, (n * 360) / state.count).toString();
        return counter({ key: n, color });
      }),
    ]
  );
