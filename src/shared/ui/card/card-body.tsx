import type { CardBodyProps } from "./types"

import { useCardContext } from "./card"

export const CardBody = (props: CardBodyProps) => {
	const { slots } = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={slots?.body({ className })} {...restProps}>
			{children}
		</div>
	)
}