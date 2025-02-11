import type { AccordionItemCollapseProps } from "./types"

import { useTransition } from "@/shared/hooks/use-transition"

export const AccordionItemCollapse = (props: AccordionItemCollapseProps) => {
	const {
		keepMounted,
		disableAnimation,
		expanded,
		style,
		children,
		...restProps
	} = props

	const [mounted, styles] = useTransition(expanded, {
		enabled: !disableAnimation,
		initial: { opacity: 0, gridTemplateRows: "0fr" },
		enter: { opacity: 1, gridTemplateRows: "1fr" },
	})

	if (!mounted && !keepMounted) {
		return <></>
	}

	return (
		<section
			style={{ ...styles, ...style }}
			{...restProps}
		>
			{children}
		</section>
	)
}