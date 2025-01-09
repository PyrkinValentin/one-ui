import type { ReactNode } from "react"
import type { ComponentProps } from "@/shared/types/props"
import type { AlertVariantsClassNames, AlertVariantsProps } from "./variants"

export type AlertProps = ComponentProps<
	"div",
	AlertVariantsProps &
	AlertOwnProps
>

type AlertOwnProps = {
	icon?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	title?: ReactNode
	description?: ReactNode
	classNames?: AlertVariantsClassNames
}