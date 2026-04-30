import { createContext, use } from "react"

export type CardContextValue = {
	titleId: string
	descriptionId: string
}

export const CardContext = createContext<CardContextValue>({
	titleId: "",
	descriptionId: "",
})

export const useCardContext = () => use(CardContext)