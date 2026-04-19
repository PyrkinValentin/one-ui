import type { AvatarProps, AvatarImageProps, AvatarFallbackProps } from "./avatar.props"

import { getDataAttributes, resolveClassNames } from "../../utils"
import { getFallback } from "./avatar.utils"

import { Avatar } from "@base-ui/react"
import { UserRound } from "lucide-react"

export const AvatarRoot = (props: AvatarProps) => {
	const {
		variant = "solid",
		size = "md",
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<Avatar.Root
			{...restProps}
			{...getDataAttributes({ variant, size, color })}
			data-slot="avatar"
			className={resolveClassNames(className, "avatar")}
		>
			{children}
		</Avatar.Root>
	)
}

export const AvatarImage = (props: AvatarImageProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Avatar.Image
			{...restProps}
			data-slot="avatar-image"
			className={resolveClassNames(className, "avatar__image")}
		/>
	)
}

export const AvatarFallback = (props: AvatarFallbackProps) => {
	const {
		className,
		children = <UserRound/>,
		...restProps
	} = props

	return (
		<Avatar.Fallback
			{...restProps}
			data-slot="avatar-fallback"
			className={resolveClassNames(className, "avatar__fallback")}
		>
			{getFallback(children)}
		</Avatar.Fallback>
	)
}