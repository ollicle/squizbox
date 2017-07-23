// import 'babel-polyfill';
import Squizbox from './squizbox';

import stylesheets from './collectStylesheets';
import breakpoints from './collectBreakpoints';
import pairMinMax from './pairMinMax';
import sortByWidth from './sortByWidth';

const objectToArray = function (obj) {
	return Object.getOwnPropertyNames(obj).map(function(point){
		return obj[point];
	});
};

const sheets = stylesheets(document);
const breaks = breakpoints(sheets);
const points = objectToArray(breaks).sort(sortByWidth);
const pairs = pairMinMax(points);

//	Gather styles
// console.log('sheets',sheets);
// console.log('breakpoints',breaks);
// console.log('points',points);
console.log('pairs',pairs);


//	Strip out stylesheet links
[].slice.call(document.getElementsByTagName('link')).forEach((x)=> {x.remove()});

//	Strip out style elements

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
		breakpoints: pairs,
		iframeWidth: '1024',
		selected: 'hi'
	}
});

