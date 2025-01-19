import type { CardHeaderProps } from "./types"

import { useCardContext } from "./card"

export const CardHeader = (props: CardHeaderProps) => {
	const { slots } = useCardContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<div className={slots?.header({ className })} {...restProps}>
			{children}
		</div>
	)
}