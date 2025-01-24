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
		slotProps = {},
		className,
		variant,
		color,
		rounded,
		hideIconWrapper,
		hideIcon,
		children,
		...restProps
	} = props

	const {
		iconWrapperProps,
		alertIconProps,
		mainWrapperProps,
		titleProps,
		descriptionProps,
	} = slotProps

	const classNames = useMemo(() => {
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

	const Icon = iconMap[color ?? "default"]

	return (
		<div
			role="alert"
			className={classNames.base({ className })}
			{...restProps}
		>
			{startContent}

			<div
				{...iconWrapperProps}
				className={classNames.iconWrapper({ className: iconWrapperProps?.className })}
			>
				{icon ? (
					<Slot
						as="svg"
						{...alertIconProps}
						className={classNames.alertIcon({ className: alertIconProps?.className })}
					>
						{icon}
					</Slot>
				) : (
					<Icon
						{...alertIconProps}
						className={classNames.alertIcon({ className: alertIconProps?.className })}
					/>
				)}
			</div>

			<div
				{...mainWrapperProps}
				className={classNames.mainWrapper({ className: mainWrapperProps?.className })}
			>
				{title ? (
					<div
						{...titleProps}
						className={classNames.title({ className: titleProps?.className })}
					>
						{title}
					</div>
				) : null}

				{description ? (
					<div
						{...descriptionProps}
						className={classNames.description({ className: descriptionProps?.className })}
					>
						{description}
					</div>
				) : null}

				{children}
			</div>

			{endContent}
		</div>
	)
}