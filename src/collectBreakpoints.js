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

const extractMediaRules = function (acc, sheet) {

	var mediaRuleSet = makeArray(sheet.cssRules)
		.filter(isMediaRule).map((ruleList) => {
			return ruleList.media;
		});

	console.log('mediaRuleSet',mediaRuleSet);

	return mediaRuleSet.length ? acc.concat(mediaRuleSet) : acc;
}

export default function (stylesheets) {

	var rules = stylesheets
		.filter(isNotLocal)
		.filter(isIterable)
		.reduce(extractMediaRules,[]);

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
