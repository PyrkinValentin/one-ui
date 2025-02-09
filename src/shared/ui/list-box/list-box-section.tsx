import type { ListBoxSectionProps } from "./types"

import { useId, useMemo } from "react"

import { listBoxSectionVariants } from "./variants"

export const ListBoxSection = (props: ListBoxSectionProps) => {
	const {
		title,
		className,
		showDivider,
		children,
		...restProps
	} = props

	const titleId = useId()

	const classNames = useMemo(() => {
		return listBoxSectionVariants({
			showDivider,
		})
	}, [showDivider])

	return (
		<li
			role="presentation"
			className={classNames.base({ className })}
			{...restProps}
		>
			<span
				id={titleId}
				className={classNames.heading()}
			>
				{title}
			</span>

			<ul
				role="group"
				aria-labelledby={titleId}
				className={classNames.group()}
			>
				{children}
			</ul>
		</li>
	)
}