import { element, read } from "../mod.js";
export { init } from "../mod.js";

const ctof = (c) => c * (9 / 5) + 32;
const ftoc = (f) => (f - 32) * (5 / 9);

export default read(null, { celsius: 0, fahrenheit: 0 }, ({ state }) => [
  element.input({ props: { value: state.celsius } }),
  element.input({ props: { value: state.fahrenheit } }),
]);
