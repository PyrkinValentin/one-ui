import { isArray } from "@/shared/helpers/is-array"

export const numberFindClosest = (array: number[], value: number) => {
	return array.reduce((prev, curr) => {
		return Math.abs(curr - value) < Math.abs(prev - value)
			? curr
			: prev
	})
}

export const numberClump = <
	V extends number | number[]
>(value: V, minValue: number, maxValue: number) => {
	const clump = (value: number) => {
		return Math.min(Math.max(value, minValue), maxValue)
	}

	return isArray(value)
		? value.map(clump) as V
		: clump(value) as V
}