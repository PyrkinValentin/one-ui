export type ClassValue = string | number | boolean | undefined | null | ClassValueObject | ClassValue[]
type ClassValueObject = Record<string, boolean | number | string | undefined | null>

const toValue = (mix: ClassValue): string => {
	let str = ""

	if (
		typeof mix === "string" ||
		typeof mix === "number"
	) {
		str = `${mix}`
	} else if (Array.isArray(mix)) {
		for (let i = 0, len = mix.length; i < len; i++) {
			const value = toValue(mix[i])

			if (value) {
				if (str) str += " "
				str += value
			}
		}
	} else if (
		typeof mix === "object" &&
		mix !== null
	) {
		for (const key in mix) {
			if (mix[key]) {
				if (str) str += " "
				str += key
			}
		}
	}

	return str
}

export const cn = (...inputs: ClassValue[]): string => {
	let str = ""

	for (let i = 0, len = inputs.length; i < len; i++) {
		const value = toValue(inputs[i])

		if (value) {
			if (str) str += " "
			str += value
		}
	}

	return str
}