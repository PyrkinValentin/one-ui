import { useEffect, useState } from "react"

export const useDelayedMount = (mount?: boolean, ms?: number) => {
	const [mounted, setMounted] = useState(!!mount)

	useEffect(() => {
		if (mount && !mounted) {
			setMounted(true)
		}

		if (!mount && mounted) {
			const timeoutId = setTimeout(() => setMounted(false), ms)

			return () => clearTimeout(timeoutId)
		}
	}, [
		ms,
		mounted,
		mount,
	])

	return mounted
}