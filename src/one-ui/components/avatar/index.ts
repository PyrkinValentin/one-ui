export type * from "./avatar.props"

import { composeComponent } from "../../utils"

import { AvatarRoot, AvatarImage, AvatarFallback } from "./avatar"

type AvatarSlots = {
	Image: typeof AvatarImage
	Fallback: typeof AvatarFallback
}

export const Avatar = composeComponent<typeof AvatarRoot, AvatarSlots>(AvatarRoot, {
	Image: AvatarImage,
	Fallback: AvatarFallback,
})