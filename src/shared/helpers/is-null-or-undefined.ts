import { isNull } from "./is-null"
import { isUndefined } from "./is-undefined"

export const isNullOrUndefined = (value: unknown): value is null | undefined => {
	return isNull(value) || isUndefined(value)
}