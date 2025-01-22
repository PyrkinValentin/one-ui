import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { SwitchVariantsProps } from "./variants"

export type SwitchProps = ComponentProps<
	"input",
	SwitchVariantsProps &
	SwitchOwnProps
>

type SwitchOwnProps = {
	defaultChecked?: boolean
	startContent?: ReactNode
	endContent?: ReactNode
	thumbIcon?: ReactNode
}