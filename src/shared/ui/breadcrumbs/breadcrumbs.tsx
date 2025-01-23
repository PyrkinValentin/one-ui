import type { BreadcrumbsProps } from "./types"

export const Breadcrumbs = (props: BreadcrumbsProps) => {
	const {
		children,
		...restProps
	} = props
	
	return (
		<nav aria-labelledby="breadcrumbs-ol" {...restProps}>
			<ol>
				<li aria-current="page">
					{children}
				</li>
			</ol>
		</nav>
	)
}