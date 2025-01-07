import type { SpinnerProps } from "./types"

export const Spinner = (props: SpinnerProps) => {
	const {
		...restProps
	} = props

	return (
		<span {...restProps}/>
	)
}