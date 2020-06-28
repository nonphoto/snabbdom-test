import { element } from "./lib.js";
import range from "lodash/range.js";
import { lch } from "d3-color";
import { css } from "./glamor.js";

const counter = ({ color, ...other }) => {
  console.log(color);
  console.log(css({ background: color }).toString());
  return element.div(other, { value: 0 }, ({ state }) => [
    element.button(
      {
        props: { className: css({ background: color }) },
        onClick: () => void (state.value += 1),
      },
      {},
      state.value
    ),
  ]);
};

export default () =>
  element.div(
    { props: { className: css({ display: "flex", margin: "1rem" }) } },
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
