export default function (property) {
	var propAndLength = property.split(':');
	var minMax = propAndLength[0].indexOf('min') !== -1 ? 'min' : 'max';
	var valueAndUnit = propAndLength[1].match(/(\d+\.?\d*?)(px|em|rem)/);
	
	return {
		value: valueAndUnit[1],
		unit: valueAndUnit[2],
		minMax: minMax
	};
};
