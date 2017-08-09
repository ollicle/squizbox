// import 'babel-polyfill';
import Squizbox from './squizbox';

const removeFromDom = function (tag) {
	[].slice.call(document.getElementsByTagName(tag)).forEach((x)=> {x.remove()});
};

//	Strip out stylesheet links
removeFromDom('link');

//	Strip out inline stylesheets
removeFromDom('style');

//	Wipe out document
document.body.innerHTML = '';

//	Load component
const squiz = new Squizbox({
	// `target` is the only required option – the element
	// to render the component to
	target: document.querySelector( 'body' ),

	// `data` is optional. A component can also have
	// default data – we'll learn about that later.
	data: {
		breakpoints: [],
		iframeWidth: '1024',
		selected: null
	}
});

