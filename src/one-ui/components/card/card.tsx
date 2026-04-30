"use client"

import type { CardProps, CardContentProps, CardTitleProps, CardDescriptionProps } from "./card.props"
import type { CardContextValue } from "./card.context"

import { useId, useMemo } from "react"
import { useCardContext } from "./card.context"

import { resolveClassNames } from "../../utils"

import { CardContext } from "./card.context"
import { Render } from "../render"

export const CardRoot = (props: CardProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const titleId = useId()
	const descriptionId = useId()

	const contextValue = useMemo<CardContextValue>(() => ({
		titleId,
		descriptionId,
	}), [titleId, descriptionId])

	return (
		<CardContext value={contextValue}>
			<Render
				{...restProps}
				defaultTagName="section"
				data-slot="card"
				aria-labelledby={titleId}
				aria-describedby={descriptionId}
				className={resolveClassNames(className, "card")}
			>
				{children}
			</Render>
		</CardContext>
	)
}

export const CardContent = (props: CardContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div
			{...restProps}
			data-slot="card-content"
			className={resolveClassNames(className, "card__content")}
		>
			{children}
		</div>
	)
}

export const CardTitle = (props: CardTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const { titleId } = useCardContext()

	return (
		<h2
			{...restProps}
			data-slot="card-title"
			id={titleId}
			className={resolveClassNames(className, "card__title")}
		>
			{children}
		</h2>
	)
}

export const CardDescription = (props: CardDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const { descriptionId } = useCardContext()

	return (
		<p
			{...restProps}
			data-slot="card-description"
			id={descriptionId}
			className={resolveClassNames(className, "card__description")}
		>
			{children}
		</p>
	)
}