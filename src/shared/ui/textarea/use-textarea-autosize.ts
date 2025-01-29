import { useEffect, useRef } from "react"

export const useTextareaAutosize = (value: string, autosize?: boolean) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	const setSize = () => {
		const element = textareaRef.current

		if (!element) return

		element.style.height = ""
		element.style.height = `${element.scrollHeight}px`
	}

	useEffect(() => {
		if (!autosize) return

		setSize()

		addEventListener("resize", setSize)

		return () => removeEventListener("resize", setSize)
	}, [
		autosize,
		value,
	])

	return textareaRef
}