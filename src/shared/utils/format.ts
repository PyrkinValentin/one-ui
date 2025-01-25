export const formatNumber = (
	options?: Intl.NumberFormatOptions,
	locales: Intl.LocalesArgument = "BY",
) => new Intl.NumberFormat(locales, options)

export const formatArrayNumber = (
	options?: Intl.NumberFormatOptions,
	locales?: Intl.LocalesArgument,
) => {
	return {
		format: (value: number[]) => {
			return value.map<string>((v) => formatNumber(options, locales).format(v))
		},
		formatRange: (value: number[]) => {
			return value.reduce<string[]>((acc, curr, index) => {
				return index === value.length - 1
					? acc
					: [...acc, formatNumber(options, locales).formatRange(curr, value[index + 1])]
			}, [])
		}
	}
}