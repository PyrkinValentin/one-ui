export type * from "./badge.props"

import { composeComponent } from "../../utils"

import { BadgeRoot, BadgeIndicator } from "./badge"

type BadgeSlots = {
	Indicator: typeof BadgeIndicator
}

export const Badge = composeComponent<typeof BadgeRoot, BadgeSlots>(BadgeRoot, {
	Indicator: BadgeIndicator,
})