import deconstructDeclaration from './deconstructDeclaration';

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

export default function (stylesheets) {

	var rules = stylesheets
		.filter(isNotLocal)
		.filter(isIterable)
		.map(getRules)
		.reduce(flatten)
		.filter(isMediaRule)
		.map(getMedia);

	console.log('rules',rules);

	var widths = rules
		.map(getWidthRules)
		.reduce(flatten)
		.filter(dedupe);
	//	.map(makeViewObject)
	// TODO	Determine minimal object required for view
	
	console.log('widths',widths);
	
	var breakpoints = rules.reduce(function(acc, rule) {
	
		var ruleLengths = rule.mediaText.match(extractWidth);
	
		if (!ruleLengths) {
			return acc;
		}
	
		ruleLengths.forEach(function(rl){
			var parts = deconstructDeclaration(rl);
			var width = parts.value + parts.unit;
			var key = parts.minMax + width;
			
			console.log(rl,"parts",parts);
			
			//	TODO pass value and unit to function that converts to pixels for comparison
			var pixels = +parts.value;
			
			var mediaRule = {
				value: +parts.value,
				unit: parts.unit,
				width: width,
				pixels: pixels,
				rules: [rule],
				minmax: parts.minMax
			};
		
			if (acc[key]) {
				acc[key].rules = acc[key].rules.concat([rule]);
			} else {
				acc[key] = mediaRule;
			}
		});
	
		return acc;
	},{});
	
	return breakpoints;
};
