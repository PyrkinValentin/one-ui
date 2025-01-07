export const camelCaseToKebabCase = (str: string) => {
	return str.replace(
		/[A-Z]+(?![a-z])|[A-Z]/g,
		(substring, ofs) => (ofs ? '-' : '') + substring.toLowerCase(),
	)
}