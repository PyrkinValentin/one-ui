import type { LinkProps } from "./types"

import { useMemo } from "react"

import NextLink from "next/link"
import { MdOpenInNew } from "react-icons/md"

import { linkVariants } from "./variants"

export const Link = (props: LinkProps) => {
	const {
		external,
		showAnchorIcon = external,
		anchorIcon = <MdOpenInNew/>,
		className,
		size,
		color,
		underline,
		block,
		disabled,
		disableAnimation,
		children,
		...restProps
	} = props

	const classNames = useMemo(() => {
		return linkVariants({
			className,
			size,
			color,
			underline,
			block,
			disabled,
			disableAnimation,
		})
	}, [
		className,
		size,
		color,
		underline,
		block,
		disabled,
		disableAnimation,
	])

	const externalProps = external
		? { rel: "noopener noreferrer", target: "_blank" }
		: undefined

	return (
		<NextLink
			tabIndex={disabled ? -1 : undefined}
			className={classNames}
			{...externalProps}
			{...restProps}
		>
			{children}
			{showAnchorIcon && anchorIcon}
		</NextLink>
	)
}