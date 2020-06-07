import { h, init } from 'snabbdom';
import classModule from 'snabbdom/modules/class';
import propsModule from 'snabbdom/modules/props';
import styleModule from 'snabbdom/modules/style';
import eventModule from 'snabbdom/modules/eventlisteners';

const patch = init([classModule, propsModule, styleModule, eventModule]);

console.log(patch);

var container = document.getElementById('root');

var vnode = h(
  'div#container.two.classes',
  { on: { click: () => void console.log('hello') } },
  [
    h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
    ' and this is just normal text',
    h('a', { props: { href: '/foo' } }, "I'll take you places!"),
  ],
);
// Patch into empty DOM element – this modifies the DOM as a side effect
patch(container, vnode);

var newVnode = h(
  'div#container.two.classes',
  { on: { click: () => void console.log('hello') } },
  [
    h(
      'span',
      { style: { fontWeight: 'normal', fontStyle: 'italic' } },
      'This is now italic type',
    ),
    ' and this is still just normal text',
    h('a', { props: { href: '/bar' } }, "I'll take you places!"),
  ],
);
// Second `patch` invocation
patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state
