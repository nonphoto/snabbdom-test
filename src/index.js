import { element, read, init } from "./lib.js";
import { range } from "lodash";
import { lch } from "d3-color";

const counter = ({ color, ...other }) =>
  read({ initial: 0, ...other }, (value, setValue) => [
    element.button(
      {
        style: { background: color },
        onClick: () => void setValue(value + 1),
      },
      value
    ),
  ]);

const main = () =>
  read(
    {
      initial: 5,
      style: { display: "flex", margin: "1rem" },
    },
    (count, setCount) => [
      element.button({ onClick: () => void setCount(count - 1) }, "Less"),
      element.button({ onClick: () => void setCount(count + 1) }, "More"),
      ...range(count).map((n) => {
        const color = lch(78, 33, (n * 360) / count).toString();
        return counter({ key: n, color });
      }),
    ]
  );

init(main)();
