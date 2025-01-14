import type { ClassValue, VariantProps } from "tailwind-variants"

export type { VariantProps }

type TV = {
	slots: Record<string, unknown>
}

export type VariantSlots<S extends TV> = {
	[key in keyof S["slots"]]?: ClassValue
}