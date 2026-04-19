import type { MouseEvent } from "react"

export const focusInputSlot = (ev: MouseEvent<HTMLDivElement>) => {
	const target = ev.target as HTMLDivElement

	if (target.closest("button, [role='button']")) return

	const input = ev
		.currentTarget
		.querySelector<HTMLInputElement>(".input")

	if (
		input &&
		target !== input &&
		!input.contains(target)
	) {
		input.focus()
	}
}