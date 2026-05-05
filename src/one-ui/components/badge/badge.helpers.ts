import type { ReactNode } from "react"

export const isDot = (children?: ReactNode) => !children

export const isOneChar = (children?: ReactNode) => {
	return !!children && typeof children === "string" && children.length === 1
}