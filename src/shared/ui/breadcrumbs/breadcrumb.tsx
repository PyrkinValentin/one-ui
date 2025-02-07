import type { BreadcrumbProps } from "./types"

import Link from "next/link"

export const Breadcrumb = (props: BreadcrumbProps) => {
	const {
		startContent,
		endContent,
		children,
		...restProps
	} = props

	return (
		<Link {...restProps}>
			{startContent}
			{children}
			{endContent}
		</Link>
	)
}