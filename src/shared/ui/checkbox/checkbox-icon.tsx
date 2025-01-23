import type { CheckboxIconProps } from "./types"

export const CheckboxIcon = (props: CheckboxIconProps) => {
	const {
		checked,
		disableAnimation,
		...restProps
	} = props

	return (
		<svg
			aria-hidden="true"
			role="presentation"
			viewBox="0 0 17 18"
			{...restProps}
		>
			<polyline
				fill="none"
				points="1 9 7 14 15 4"
				stroke="currentColor"
				strokeDasharray="22"
				strokeDashoffset={checked ? 44 : 66}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				style={{
					...(checked && !disableAnimation
							? { transition: "stroke-dashoffset 0.15s linear 0.2s" }
							: undefined
					),
				}}
			/>
		</svg>
	)
}