import { useCallback, useState } from "react"
import { useCallbackEvent } from "@/shared/hooks/use-callback-event"

import { isUndefined } from "@/shared/helpers/is-undefined"

type UseControlledStateOptions<
	Value,
	OnChange extends (value: Value, ...args: never[]) => void,
> = {
	defaultValue: Value | (() => Value)
	value?: Value
	onValueChange?: OnChange
}

export const useControlledState = <
	Value,
	OnChange extends (value: Value, ...args: never[]) => void
>(options: UseControlledStateOptions<Value, OnChange>) => {
	const {
		defaultValue,
		value,
		onValueChange,
	} = options

	const [uncontrolledState, setUncontrolledState] = useState<Value>(defaultValue)

	const setControlledState = useCallbackEvent(onValueChange)

	const controlled = !isUndefined(value)

	const state = controlled
		? value
		: uncontrolledState

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	const setState = useCallback<OnChange>((value, ...args) => {
		setControlledState?.(value, ...args)

		if (!controlled) {
			setUncontrolledState(value)
		}
	}, [
		controlled,
		setControlledState,
	])

	return [state, setState, controlled] as const
}