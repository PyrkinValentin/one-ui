const SPACES_REGEX = /\s+/

type GetInitialsOptions = {
	fallback?: string
	limitWhenOneWord?: number
	limit?: number
}

export const getInitials = (name?: string, options: GetInitialsOptions = {}): string => {
	const {
		fallback = "?",
		limitWhenOneWord = 1,
		limit = 2,
	} = options

	if (
		!name ||
		name.length === 0
	) return fallback

	const trimmed = name.trim()

	if (!trimmed) return fallback

	const words = trimmed.split(SPACES_REGEX)

	if (words.length === 1) {
		const chars = [...words[0]]
		const firstChar = chars[0].toUpperCase()

		const restChars = chars
			.slice(1, limitWhenOneWord)
			.join("")
			.toLowerCase()

		return firstChar + restChars || fallback
	}

	let initials = ""

	for (let i = 0; i < words.length; i++) {
		const word = words[i]

		if (word) {
			const [firstChar] = [...word]

			initials += firstChar

			if (initials.length === limit) break
		}
	}

	return initials.toUpperCase() || fallback
}