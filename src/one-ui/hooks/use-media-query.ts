import type { UseMediaQueryOptions } from "@base-ui/react/unstable-use-media-query"

import { useMediaQuery as usePrimitive } from "@base-ui/react/unstable-use-media-query"

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl"
type Preference = "reduce" | "no-preference"
type ColorScheme = "light" | "dark"
type MediaQuery = string | ((query: QueryBuilder) => string)

type QueryBuilder = {
	up: (breakpoint: Breakpoint) => string
	down: (breakpoint: Breakpoint) => string
	between: (startBreakpoint: Breakpoint, endBreakpoint: Breakpoint) => string
	only: (breakpoint: Breakpoint) => string
	reducedMotion: (preference: Preference) => string
	colorScheme: (scheme: ColorScheme) => string
}

const BREAKPOINTS = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536,
} as const

const BREAKPOINT_KEYS = Object.keys(BREAKPOINTS) as Breakpoint[]

const NEXT_BREAKPOINT_MAP = new Map(
	BREAKPOINT_KEYS.map((key, i) => {
		return [key, BREAKPOINT_KEYS.at(i + 1)]
	})
)

const getMinWidth = (breakpoint: Breakpoint) => {
	return BREAKPOINTS[breakpoint]
}

const getMaxWidth = (breakpoint: Breakpoint) => {
	return BREAKPOINTS[breakpoint] - 0.02
}

const getNextBreakpoint = (breakpoint: Breakpoint) => {
	return NEXT_BREAKPOINT_MAP.get(breakpoint)
}

const createBetweenQuery = (startBreakpoint: Breakpoint, endBreakpoint: Breakpoint) => {
	const minWidth = getMinWidth(startBreakpoint)
	const nextKey = getNextBreakpoint(endBreakpoint)

	return nextKey
		? `(min-width: ${minWidth}px) and (max-width: ${getMaxWidth(nextKey)}px)`
		: `(min-width: ${minWidth}px)`
}

const queryBuilder: QueryBuilder = {
	up: (breakpoint) => `(min-width: ${getMinWidth(breakpoint)}px)`,
	down: (breakpoint) => `(max-width: ${getMaxWidth(breakpoint)}px)`,
	between: createBetweenQuery,
	only: (breakpoint) => createBetweenQuery(breakpoint, breakpoint),
	reducedMotion: (preference) => `(prefers-reduced-motion: ${preference})`,
	colorScheme: (scheme) => `(prefers-color-scheme: ${scheme})`,
}

export const useMediaQuery = (query: MediaQuery, options: UseMediaQueryOptions = {}) => {
	const resolvedQuery = typeof query === "string"
		? query
		: query(queryBuilder)

	return usePrimitive(resolvedQuery, options)
}