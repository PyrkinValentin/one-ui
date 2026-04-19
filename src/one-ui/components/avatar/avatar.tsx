import type { AvatarProps, AvatarImageProps, AvatarFallbackProps } from "./avatar.props"

import { composeComponent, getDataAttributes, resolveClassNames } from "../../utils"
import { getFallback } from "./avatar.utils"

import { Avatar as AvatarPrimitive } from "@base-ui/react"
import { UserRound } from "lucide-react"

const Root = (props: AvatarProps) => {
	const {
		variant = "solid",
		size = "md",
		color = "default",
		className,
		children,
		...restProps
	} = props

	return (
		<AvatarPrimitive.Root
			{...restProps}
			{...getDataAttributes({ variant, size, color })}
			data-slot="avatar"
			className={resolveClassNames(className, "avatar")}
		>
			{children}
		</AvatarPrimitive.Root>
	)
}

const Img = (props: AvatarImageProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<AvatarPrimitive.Image
			{...restProps}
			data-slot="avatar-image"
			className={resolveClassNames(className, "avatar__image")}
		/>
	)
}

const Fallback = (props: AvatarFallbackProps) => {
	const {
		className,
		children = <UserRound/>,
		...restProps
	} = props

	return (
		<AvatarPrimitive.Fallback
			{...restProps}
			data-slot="avatar-fallback"
			className={resolveClassNames(className, "avatar__fallback")}
		>
			{getFallback(children)}
		</AvatarPrimitive.Fallback>
	)
}

type AvatarSlots = {
	Image: typeof Img
	Fallback: typeof Fallback
}

export const Avatar = composeComponent<typeof Root, AvatarSlots>(Root, {
	Image: Img,
	Fallback,
})