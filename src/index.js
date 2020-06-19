import { element, read, init } from "./lib.js";
import { range } from "lodash";
import { lch } from "d3-color";

const button = (text, onClick) =>
  element.button({ on: { click: onClick } }, text);

const counter = (key, color) =>
  read({ initial: 0, key }, (value, setValue) => [
    element.button(
      {
        style: { background: color },
        on: { click: () => void setValue(value + 1) },
      },
      value.toString()
    ),
  ]);

const main = () =>
  read(
    {
      initial: 5,
      style: { display: "flex", margin: "1rem" },
    },
    (count, setCount) => [
      button("Less", () => void setCount(count - 1)),
      button("More", () => void setCount(count + 1)),
      ...range(count).map((n) => {
        const color = lch(78, 33, (n * 360) / count).toString();
        return counter(n, color);
      }),
    ]
  );

init(main)();
