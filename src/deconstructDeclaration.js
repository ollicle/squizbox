export default function (property) {
	const propAndLength = property.split(':');
	const minMax = propAndLength[0].indexOf('min') !== -1 ? 'min' : 'max';
	const valueAndUnit = propAndLength[1].match(/(\d+\.?\d*?)(px|em|rem)/);
	
	return {
		value: valueAndUnit[1],
		unit: valueAndUnit[2],
		minMax: minMax
	};
};
