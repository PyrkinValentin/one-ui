import type { CardFooterProps } from "./types"

import { useCardContext } from "./card"

export const CardFooter = (props: CardFooterProps) => {
	const { classNames } = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={classNames?.footer({ className })} {...restProps}>
			{children}
		</div>
	)
}