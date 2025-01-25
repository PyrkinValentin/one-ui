import { isNullOrUndefined } from "./is-null-or-undefined"
import { isArray } from "./is-array"
import { isDateObject } from "./is-date-object"

export const isObjectType = (value: unknown): value is object =>
	typeof value === "object"

export const isObject = <T extends object>(value: unknown): value is T => {
	return !isNullOrUndefined(value) &&
		!isArray(value) &&
		isObjectType(value) &&
		!isDateObject(value)
}