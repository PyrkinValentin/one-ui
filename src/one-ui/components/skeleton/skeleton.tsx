import type { SkeletonProps } from "./skeleton.props"

import { resolveClassNames } from "../../utils"

export const SkeletonRoot = (props: SkeletonProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<span
			{...restProps}
			aria-live="polite"
			aria-busy="true"
			role="progressbar"
			data-slot="skeleton"
			className={resolveClassNames(className, "skeleton")}
		>
			{children}
		</span>
	)
}