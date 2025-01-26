import type { BreadcrumbProps } from "./types"

import Link from "next/link"

export const Breadcrumb = (props: BreadcrumbProps) => {
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