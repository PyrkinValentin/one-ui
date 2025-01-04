import type { Config } from "tailwindcss"

import { plugin } from "./src/core/theme/plugin"

export default {
	content: [
		"./src/app/**/*.{ts,tsx}",
		"./src/shared/ui/**/*.{ts,tsx}",
	],
	plugins: [plugin],
} satisfies Config