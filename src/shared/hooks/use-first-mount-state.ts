import { useRef } from "react"

export const useFirstRender = () => {
	const firstRender = useRef(true)

	if (firstRender.current) {
		firstRender.current = false

		return true
	}

	return firstRender.current
}