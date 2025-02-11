import type { RefObject } from "react"
import type { ComponentProps } from "@/shared/types/props"

import { useEffect, useState } from "react"

type UseImageLoaderOptions =
	Pick<ComponentProps<"img">, "loading"> &
	UseImageOwnOptions

type UseImageOwnOptions = {
	ref: RefObject<HTMLImageElement | null>
}

export const useImageLoader = (options: UseImageLoaderOptions) => {
	const {
		loading,
		ref,
	} = options

	const [loaded, setLoaded] = useState(loading === "eager")

	useEffect(() => {
		const element = ref.current

		if (!element || loading === "eager") return

		if (element.complete && element.naturalWidth) {
			queueMicrotask(() => {
				setLoaded(true)
			})
		}

		element.onload = () => {
			setLoaded(true)
		}

		element.onerror = () => {
			setLoaded(false)
		}

		return () => {
			element.onload = null
			element.onerror = null
		}
	}, [loading, ref])

	return loaded
}