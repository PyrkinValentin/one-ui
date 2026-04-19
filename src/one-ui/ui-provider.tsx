"use client"

import type { ReactNode } from "react"

import { ThemeProvider } from "next-themes"
import { Toast, Tooltip } from "@base-ui/react"
import { ToastList } from "./components/toast/toast"

import { toastManager } from "./components/toast/toast.manager"

type UiProviderProps = {
	children: ReactNode
}

export const UiProvider = (props: UiProviderProps) => {
	const { children } = props

	return (
		<ThemeProvider
			disableTransitionOnChange
			attribute="class"
		>
			<Tooltip.Provider
				delay={200}
				closeDelay={200}
			>
				<div className="root">
					{children}
				</div>
			</Tooltip.Provider>

			<Toast.Provider toastManager={toastManager}>
				<ToastList/>
			</Toast.Provider>
		</ThemeProvider>
	)
}