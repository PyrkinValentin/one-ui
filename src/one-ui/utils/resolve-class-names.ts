import type { ClassValue } from "./cn"

import { cn } from "./cn"

type ResolveClassNamesReturn<State> = State extends string
	? string
	: string | ((state: State) => string | undefined)

export const resolveClassNames = <State = string>(
	className?: ClassValue | ((state: State) => string | undefined),
	styles?: ClassValue
): ResolveClassNamesReturn<State> => {
	if (!className) return cn(styles) as ResolveClassNamesReturn<State>

	if (typeof className === "function") {
		return ((state: State) => cn(styles, className(state))) as ResolveClassNamesReturn<State>
	}

	return cn(styles, className) as ResolveClassNamesReturn<State>
}