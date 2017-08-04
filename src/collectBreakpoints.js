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

const dedupe = function (item, index, array) {
	return array.indexOf(item) === index;
};

const getMedia = function (ruleList) {
	return ruleList.media;
};

const getWidthRules = function (rule) {
	return rule.mediaText.match(extractWidth);
};

const makeViewObject = function (rule) {
	const parts = deconstructDeclaration(rule);
	const width = parts.value + parts.unit;
	const key = parts.minMax + width;
	
	// TODO	Determine minimal object required for view
	return {
		value: +parts.value,
		pixels: +parts.value,
		unit: parts.unit,
		width: width,
		minmax: parts.minMax
	};
};

export default function (stylesheets) {

	var media = stylesheets
		.filter(isNotLocal)
		.filter(isIterable)
		.map(getRules)
		.reduce(flatten)
		.filter(isMediaRule)
		.map(getMedia);

	console.log('media',media);

	var boundaries = media
		.map(getWidthRules)
		.reduce(flatten)
		.filter(dedupe)
		.map(makeViewObject)
		.sort(sortByWidth);
	
	console.log('boundaries',boundaries);

	return pairMinMax(boundaries);
};
