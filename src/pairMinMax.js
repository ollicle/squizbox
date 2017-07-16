import isWithinOne from './isWithinOne';

export default function (points) {
	return points.reduce(function (acc, point, index, array) {
	
		if (point.minmax === 'max') {
		//	is max create new item
			
			return acc.concat({
				max: point,
				pixels: point.pixels
			});
			
		}
		
		console.log('point.pixels',point.pixels);
		
		//	is min check for existing max to pair with
		var partner = acc.filter(function (item, index, array) {
			//	within one pixel
			
			console.log('item.pixels',item.pixels);
			
			return isWithinOne(item.pixels, point.pixels);
		});
		
		console.log('partner',partner);
	
		if (partner.length) {
			return acc.map(function (item, index, array) {
			
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
		
	},[]);
};
