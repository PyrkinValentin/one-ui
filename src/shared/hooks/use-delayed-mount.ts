import { useEffect, useState } from "react"

export const useDelayedMount = (mount?: boolean, delay?: number) => {
	const [mounted, setMounted] = useState(!!mount)

	useEffect(() => {
		if (mount && !mounted) {
			setMounted(true)
		}

		if (!mount && mounted) {
			if (delay) {
				const timeoutId = setTimeout(() => setMounted(false), delay)

				return () => clearTimeout(timeoutId)
			}

			setMounted(false)
		}
	}, [
		mount,
		mounted,
		delay,
	])

	return mounted
}