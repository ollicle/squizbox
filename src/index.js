// import 'babel-polyfill';
import Squizbox from './squizbox';

const squiz = new Squizbox({
  // `target` is the only required option – the element
  // to render the component to
  target: document.querySelector( 'main' ),

  // `data` is optional. A component can also have
  // default data – we'll learn about that later.
  data: { name: 'world' }
});
