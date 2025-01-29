import { useEffect, useRef } from "react"

export const useTextareaAutosize = (value: string, enabled?: boolean) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	const setSize = () => {
		const element = textareaRef.current

		if (!element) return

		element.style.height = ""
		element.style.height = `${element.scrollHeight}px`
	}

	useEffect(() => {
		if (!enabled) return

		setSize()
	}, [
		enabled,
		value,
	])

	useEffect(() => {
		if (!enabled) return

		addEventListener("resize", setSize)

		return () => removeEventListener("resize", setSize)
	}, [enabled])

	return textareaRef
}