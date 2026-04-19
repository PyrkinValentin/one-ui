type DataProps = Record<`data-${string}`, string>
type DataObject = Record<string, string | number | boolean | null | undefined>

const MAX_CACHE_SIZE = 500
const cache = new Map<string, string>()

const kebabCase = (value?: string) => {
	if (
		typeof value !== "string" ||
		value === ""
	) return ""

	const cached = cache.get(value)

	if (cached !== undefined) {
		cache.delete(value)
		cache.set(value, cached)

		return cached
	}

	let result = ""

	for (let i = 0; i < value.length; i++) {
		const char = value[i]

		if (char >= "A" && char <= "Z") {
			result += (i !== 0 ? "-" : "") + char.toLowerCase()
		} else if (char === "_") {
			result += "-"
		} else {
			result += char
		}
	}

	if (cache.size >= MAX_CACHE_SIZE) {
		const firstKey = cache
			.keys()
			.next()
			.value

		if (firstKey !== undefined) {
			cache.delete(firstKey)
		}
	}

	cache.set(value, result)

	return result
}

export const getDataAttributes = <T extends DataObject>(object?: T) => {
	if (
		!object ||
		typeof object !== "object"
	) return {}

	const dataProps: DataProps = {}

	for (const key in object) {
		const value = object[key]

		if (
			value === undefined ||
			value === null ||
			value === false
		) {
			continue
		}

		dataProps[`data-${kebabCase(key)}`] = value === true
			? ""
			: `${value}`
	}

	return dataProps
}