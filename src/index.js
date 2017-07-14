// import 'babel-polyfill';
import Squizbox from './squizbox';

//	Gather styles
import stylesheets from './collectStylesheets';

console.log(stylesheets(document));

//	Strip out head styles

//	Wipe out document
document.body.innerHTML = '';

//	Load component
const squiz = new Squizbox({
  // `target` is the only required option – the element
  // to render the component to
  target: document.querySelector( 'body' ),

  // `data` is optional. A component can also have
  // default data – we'll learn about that later.
  data: { name: 'Ollie' }

});
