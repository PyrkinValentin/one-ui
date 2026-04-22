type DataProps = Record<DataAttribute, string>
type DataObject = Record<string, string | number | boolean | null | undefined>
type DataAttribute = `data-${string}`

const MAX_CACHE_SIZE = 1000
const cache = new Map<string, DataAttribute>()

const createDataAttribute = (value?: string): DataAttribute | undefined => {
	if (
		typeof value !== "string" ||
		value === ""
	) return

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

	const finalKey: DataAttribute = `data-${result}`

	cache.set(value, finalKey)

	return finalKey
}

export const getDataAttributes = <Data extends DataObject>(object?: Data) => {
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

		const dataAttribute = createDataAttribute(key)
		
		if (!dataAttribute) {
			continue
		}

		dataProps[dataAttribute] = value === true
			? ""
			: `${value}`
	}

	return dataProps
}