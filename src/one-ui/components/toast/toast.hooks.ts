import { useMediaQuery } from "../../hooks"

import { SWIPE_DIRECTION } from "./toast.constants"

export const useSwipeDirection = () => {
	const desktop = useMediaQuery((query) => query.up("sm"))

	return desktop
		? SWIPE_DIRECTION[1]
		: SWIPE_DIRECTION
}