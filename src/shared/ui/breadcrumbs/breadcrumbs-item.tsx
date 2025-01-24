import type { BreadcrumbsItemProps } from "./types"

import Link from "next/link"

export const BreadcrumbsItem = (props: BreadcrumbsItemProps) => {
	const {
		current,
		startContent,
		endContent,
		href,
		children,
		...restProps
	} = props

	return (
		<>
			{!current && href ? (
				<Link href={href} {...restProps}>
					{startContent}
					{children}
					{endContent}
				</Link>
			) : (
				<span {...restProps}>
					{startContent}
					{children}
					{endContent}
				</span>
			)}
		</>
	)
}