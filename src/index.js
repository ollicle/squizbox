// import 'babel-polyfill';
import Squizbox from './squizbox';

document.body.innerHTML = '';

const squiz = new Squizbox({
  // `target` is the only required option – the element
  // to render the component to
  target: document.querySelector( 'body' ),

  // `data` is optional. A component can also have
  // default data – we'll learn about that later.
  data: { name: 'world' }
});
