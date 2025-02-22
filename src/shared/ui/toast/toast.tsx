import { useMemo } from "react"

import { Toaster } from "sonner"
import { Spinner } from "@/shared/ui/spinner"

import { toastRegionVariants } from "./variants"

export const Toast = () => {
	const classNames = useMemo(() => {
		return toastRegionVariants()
	}, [])

	return (
		<Toaster
			className={classNames}
			toastOptions={{ unstyled: true }}
			icons={{
				loading: <Spinner size="sm" color="current"/>,
			}}
		/>
	)
}