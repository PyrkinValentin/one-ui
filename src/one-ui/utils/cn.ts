export type ClassValue = string | number | boolean | undefined | null | ClassValueObject | ClassValue[]
type ClassValueObject = Record<string, boolean | number | string | undefined | null>

export const cn = (...inputs: ClassValue[]): string => {
	let str = ""

	function parse(input: ClassValue): void {
		if (!input) return

		if (
			typeof input === "string" ||
			typeof input === "number"
		) {
			if (str) str += " "
			str += input
		} else if (Array.isArray(input)) {
			for (let i = 0, len = input.length; i < len; i++) {
				parse(input[i]);
			}
		} else if (typeof input === "object") {
			for (const key in input) {
				if (input[key]) {
					if (str) str += " "
					str += key
				}
			}
		}
	}

	for (let i = 0, len = inputs.length; i < len; i++) {
		parse(inputs[i])
	}

	return str
}