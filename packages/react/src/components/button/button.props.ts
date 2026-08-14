import type { ButtonProps as BaseButtonProps } from "@base-ui/react/button"

export type { ButtonState } from "@base-ui/react/button"

export type ButtonProps = BaseButtonProps & {
	/**
	 * If `true`, the component will be styled as a square or circle
	 * to accommodate only an icon, adjusting padding and aspect ratio.
	 * @default false
	 */
	iconOnly?: boolean
	/**
	 * The visual style of the component.
	 * @default "primary"
	 */
	variant?: "primary" | "secondary" | "outline" | "ghost" | "error" | "error-soft"
	/**
	 * The size of the component.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg"
}