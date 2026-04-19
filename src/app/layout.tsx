import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

import "@/styles/globals.css"

import { Inter } from "next/font/google"
import { UiProvider } from "@/one-ui/ui-provider"

export const viewport: Viewport = {
	viewportFit: "cover",
	minimumScale: 1,
	maximumScale: 1,
}

export const metadata: Metadata = {
	title: "Офис — ООО «Самая Мебель»",
}

const inter = Inter({
	subsets: ["cyrillic"],
	variable: "--font-sans",
})

type RootLayoutProps = {
	children: ReactNode
}

const RootLayout = (props: RootLayoutProps) => {
	const { children } = props

	return (
		<html
			suppressHydrationWarning
			lang="ru"
			className={inter.variable}
		>
			<body className="antialiased">
				<UiProvider>{children}</UiProvider>
			</body>
		</html>
	)
}

export default RootLayout