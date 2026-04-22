import { useMediaQuery } from "../../hooks"

import { TOAST_SWIPE_DIRECTION } from "./toast.vars"

export const useSwipeDirection = () => {
	const desktop = useMediaQuery((query) => query.up("sm"))

	return desktop
		? TOAST_SWIPE_DIRECTION[1]
		: TOAST_SWIPE_DIRECTION
}