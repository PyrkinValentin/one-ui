import type { CardFooterProps } from "./types"

import { useCardContext } from "./card"

export const CardFooter = (props: CardFooterProps) => {
	const { slots } = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={slots?.footer({ className })} {...restProps}>
			{children}
		</div>
	)
}