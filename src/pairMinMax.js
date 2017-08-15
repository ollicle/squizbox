import isWithinOne from './isWithinOne';

export default function (acc, point) {
	
	if (point.minmax === 'max') {
		return acc.concat({
			max: point,
			pixels: point.pixels
		});
	}
// 	console.log('point.pixels',point.pixels);
	
	//	is min check for existing max to pair with
	var partner = acc.filter(function (item) {
// 		console.log('item.pixels',item.pixels);
		return isWithinOne(item.pixels, point.pixels);
	});
	
// 	console.log('partner',partner);
	if (partner.length) {
		return acc.map(function (item) {
			if (isWithinOne(item.pixels, point.pixels)) {
				return Object.assign({ min: point }, item);
			}
			return item;
		});
		
	} else {
	
		return acc.concat({
			min: point,
			pixels: point.pixels
		});
		
	}
};
