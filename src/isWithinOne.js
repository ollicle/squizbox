//	a and b are equal or b is less than one less than a
export default function (a, b) {
	return a == b || a < b && a + 1 >= b;
};
