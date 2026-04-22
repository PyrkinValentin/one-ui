export const range = (start: number, end: number) => {
	const length = end - start + 1
	const result: number[] = new Array(length)

	for (let i = 0; i < length; i++) {
		result[i] = start + i
	}

	return result
}