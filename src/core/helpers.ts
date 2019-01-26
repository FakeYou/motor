export function range(from: number, to: number) {
	const length = Math.ceil(Math.abs(to - from));
	const range = new Array(length);

	const dir = to > from ? 1 : -1;

	for (let i = 0; i <= length; i++) {
		range[i] = from + i * dir;
	}

	return range;
}
