import type { CardBodyProps } from "./types"

import { useCardContext } from "./card"

export const CardBody = (props: CardBodyProps) => {
	const { classNames } = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={classNames?.body({ className })} {...restProps}>
			{children}
		</div>
	)
}