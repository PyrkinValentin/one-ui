import type { Config } from "tailwindcss"

import { withTV } from "tailwind-variants/transformer"
import { plugin } from "./src/core/theme/plugin"

export default withTV({
	content: [
		"./src/app/**/*.{ts,tsx}",
		"./src/shared/**/*.{ts,tsx}",
	],
	plugins: [plugin],
}, {
	aliases: ["@/core/theme"],
}) satisfies Config