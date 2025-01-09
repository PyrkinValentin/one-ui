import type { AlertProps } from "./types"

import { useMemo } from "react"

import { MdInfo, MdCheckCircle, MdGppMaybe, MdError } from "react-icons/md"
import { Slot } from "@/shared/ui/system"

import { alertVariants } from "./variants"

const iconMap = {
	default: MdInfo,
	primary: MdInfo,
	secondary: MdInfo,
	success: MdCheckCircle,
	warning: MdGppMaybe,
	danger: MdError,
} as const

export const Alert = (props: AlertProps) => {
	const {
		icon,
		startContent,
		endContent,
		title,
		description,
		className,
		classNames,
		variant,
		color,
		rounded,
		hideIconWrapper,
		hideIcon,
		children,
		...restProps
	} = props

	const slots = useMemo(() => {
		return alertVariants({
			variant,
			color,
			rounded,
			hideIconWrapper,
			hideIcon,
		})
	}, [
		variant,
		color,
		rounded,
		hideIconWrapper,
		hideIcon,
	])

	const Icon = iconMap[color] ?? iconMap.default

	return (
		<div
			role="alert"
			className={slots.base({ className: [className, classNames?.base] })}
			{...restProps}
		>
			{startContent}

			<div className={slots.iconWrapper({ className: classNames?.iconWrapper })}>
				{icon
					? <Slot className={slots.alertIcon({ className: classNames?.alertIcon })}>{icon}</Slot>
					: <Icon className={slots.alertIcon({ className: classNames?.alertIcon })}/>
				}
			</div>

			<div className={slots.mainWrapper({ className: classNames?.mainWrapper })}>
				{title ? (
					<div className={slots.title({ className: classNames?.title })}>
						{title}
					</div>
				) : null}

				{description ? (
					<div className={slots.description({ className: classNames?.description })}>
						{description}
					</div>
				) : null}

				{children}
			</div>

			{endContent}
		</div>
	)
}