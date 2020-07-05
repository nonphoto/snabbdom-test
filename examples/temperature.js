import { element } from "../mod.js";
export { init } from "../mod.js";

const ctof = (c) => c * (9 / 5) + 32;
const ftoc = (f) => (f - 32) * (5 / 9);

export default element.form(
  { state: { celsius: 100, fahrenheit: ctof(100) } },
  ({ state }) => [
    element.label({}, "Celsius: "),
    element.input({
      ":type": "number",
      ".value": state.celsius,
      "@input": (e) => {
        state.celsius = e.target.value;
        state.fahrenheit = ctof(e.target.value);
      },
    }),
    element.label({}, "Fahrenheit: "),
    element.input({
      ":type": "number",
      ".value": state.fahrenheit,
      "@input": (e) => {
        state.celsius = ftoc(e.target.value);
        state.fahrenheit = e.target.value;
      },
    }),
  ]
);
