import { useEffect, useRef } from "react"

export const useFirstMountState = () => {
	const firstRender = useRef(true)
	
	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false
		}
	}, [])

	return firstRender.current
}