export default function (a,b) {

	//	a is less than b by some ordering criterion
	if (a.pixels < b.pixels) {
		return -1;
	}
	//	a is greater than b by the ordering criterion
	if (a.pixels > b.pixels) {
		return 1;
	}
	
	if (a.pixels === b.pixels) {
		if (a.minMax === 'max' && b.minMax === 'min') {
			return -1;
		}
		if (a.minMax === 'min' && b.minMax === 'max') {
			return 1;
		}
	}
	
	// a must be equal to b
	//	this ought not be possible
	console.warn('Unmerged breakpoints', a, b);
	return 0;
};
