import type { ClassValue } from "clsx"

import { clsx } from "clsx"

type ResolveClassNamesReturn<State> = State extends string
	? string
	: string | ((state: State) => string | undefined)

export const resolveClassNames = <State = string>(
	className?: ClassValue | ((state: State) => string | undefined),
	styles?: ClassValue
): ResolveClassNamesReturn<State> => {
	if (!className) return clsx(styles) as ResolveClassNamesReturn<State>

	if (typeof className === "function") {
		return ((state: State) => clsx(styles, className(state))) as ResolveClassNamesReturn<State>
	}

	return clsx(styles, className) as ResolveClassNamesReturn<State>
}