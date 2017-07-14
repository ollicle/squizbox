import deconstructDeclaration from './deconstructDeclaration';

const extractWidth = /((min-|max-)width\s*:\s*)(\d+\.?\d*?)(px|em|rem)/gi;

export default function (stylesheets) {

	var rules = stylesheets.reduce(function (acc, sheet) {

		//presuming width media queries are not at sheet level
		console.log('sheet to consume:',sheet);
		
		//	Filter out inline or extension injected sheets
		if (sheet.href && sheet.href.substr(0,4) !== 'http') {
			console.log('inline or extension sheet',sheet);
			return acc;
		}
		
		//	Test and skip security error triggering styles
		//	Firefox will throw this on cross domain CSS
		try {
		
			if (!sheet.cssRules) {
				console.log('probably not interesting',sheet);
				return acc;
			}
		
		} catch(error) {
			if (error.name !== "SecurityError") {
				debugger;
				throw error;
			}
			return acc;
		}

		
		var sheetRules = [].slice.call(sheet.cssRules);

		var mediaRuleSet = sheetRules.reduce(function(inner_acc, ruleList){
			return ruleList.media && ruleList.media.length ? inner_acc.concat(ruleList.media) : inner_acc;
		},[]);

		console.log('mediaRuleSet',mediaRuleSet)

		return mediaRuleSet.length ? acc.concat(mediaRuleSet) : acc;
	},[]);

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
