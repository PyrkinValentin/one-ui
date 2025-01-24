import type { CardHeaderProps } from "./types"

import { useCardContext } from "./card"

export const CardHeader = (props: CardHeaderProps) => {
	const { classNames } = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={classNames?.header({ className })} {...restProps}>
			{children}
		</div>
	)
}