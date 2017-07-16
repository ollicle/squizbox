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
		if (a.minmax === 'max' && b.minmax === 'min') {
			return -1;
		}
		if (a.minmax === 'min' && b.minmax === 'max') {
			return 1;
		}
	}
	
	// a must be equal to b
	//	this ought not be possible
	console.warn('Unmerged breakpoints', a, b);
	return 0;
};
