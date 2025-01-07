import { useEffect, useRef } from "react"

export const useFirstMount = () => {
	const firstMount = useRef(true)

	useEffect(() => {
		if (firstMount.current) {
			firstMount.current = false
		}
	}, [])

	return firstMount.current
}