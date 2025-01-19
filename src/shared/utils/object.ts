import { isArray } from "@/shared/helpers/is-array"

export const omit = <
	T extends object,
	K extends keyof T,
>(object: T | undefined, keys: K | K[]): Omit<T, K> => {
	if (!object) return {} as Omit<T, K>

	const clonedObject = { ...object }

	if (isArray(keys)) {
		keys.forEach((key) => delete clonedObject[key])
	} else {
		delete clonedObject[keys]
	}

	return clonedObject
}