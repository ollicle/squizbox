import deconstructDeclaration from './deconstructDeclaration';
import sortByWidth from './sortByWidth';
import pairMinMax from './pairMinMax';

const extractWidth = /((min-|max-)width\s*:\s*)(\d+\.?\d*?)(px|em|rem)/gi;

const isNotLocal = function (sheet) {
	return sheet.href && sheet.href.substr(0,4) === 'http';
};

const isIterable = function(sheet) {
	try {
		//	Test and skip security error triggering styles
		//	Firefox will throw this on cross domain CSS
		sheet.cssRules;
		return true;
	} catch(error) {
		if (error.name !== "SecurityError") {
			debugger;
			throw error;
		}
		return false;
	}
}

const isMediaRule = function (ruleList) {
	return !!(ruleList.media && ruleList.media.length);
};

const makeArray = function (list) {
	return [].slice.call(list);
};

const getRules = function (sheet) {
	return makeArray(sheet.cssRules);
};

const flatten = function(a, b) {
	return a.concat(b);
};

const getMedia = function (CSSMediaRule) {
	return CSSMediaRule.media;
};

const objectToArray = function (obj) {
	return Object.getOwnPropertyNames(obj).map(function(point){
		return obj[point];
	});
};

export default function (stylesheets, toPx) {

	var MediaLists = stylesheets
		.filter(isNotLocal)
		.filter(isIterable)
		.map(getRules)
		.reduce(flatten)
		.filter(isMediaRule)
		.map(getMedia);
	
	console.log('MediaLists',MediaLists);

	var boundaryObjs = MediaLists
		.map(function(MediaList){
			return {
				MediaLists: [MediaList],
				widthRules: MediaList.mediaText.match(extractWidth)
			};
		})
		//	expand actually
		.reduce(function(accumulated, item) {
			return accumulated.concat(item.widthRules.map(function(widthRule){
				return Object.assign(deconstructDeclaration(widthRule), {
					widthRule: widthRule,
					MediaLists: item.MediaLists
				});
			}));
		}, [])
		//	add converted pixels
		.map(function(item){
			return Object.assign({
				pixels: toPx(item.value, item.unit)
			}, item);
		})
		//	collate common rule MediaLists
		.reduce(function(acc, item){
			
			//	build object using width as key
			if (acc[item.widthRule]) {
				acc[item.widthRule].MediaLists = acc[item.widthRule].MediaLists.concat(item.MediaLists);
			} else {
				return Object.assign(acc, {[item.widthRule]: item });
			}
			return acc;
			
		}, {});
		
	//	convert back to array
	return objectToArray(boundaryObjs)
		.sort(sortByWidth)
		.reduce(pairMinMax, []);
// 		.map(console.log);
};
