import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

import { Inter } from "next/font/google"

import { ThemeProvider } from "next-themes"

import "@/core/theme/styles.css"

export const viewport: Viewport = {
	viewportFit: "cover",
	minimumScale: 1,
	maximumScale: 1,
}

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

type RootLayoutProps = {
	children: ReactNode
}

const font = Inter({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["cyrillic"],
	variable: "--font-sans",
})

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			suppressHydrationWarning
			lang="ru"
			className={`${font.variable} font-sans antialiased`}
		>
		<body className="min-h-dvh">
		<ThemeProvider
			enableSystem
			enableColorScheme
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
		</body>
		</html>
	)
}

export default RootLayout