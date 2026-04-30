export type * from "./card.props"

import { composeComponent } from "../../utils"

import { CardRoot, CardContent, CardTitle, CardDescription } from "./card"

type CardSlots = {
	Content: typeof CardContent
	Title: typeof CardTitle
	Description: typeof CardDescription
}

export const Card = composeComponent<typeof CardRoot, CardSlots>(CardRoot, {
	Content: CardContent,
	Title: CardTitle,
	Description: CardDescription,
})