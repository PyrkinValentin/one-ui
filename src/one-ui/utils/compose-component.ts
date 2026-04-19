type Slot = (...args: never[]) => unknown

export const composeComponent = <
	R extends Slot,
	S extends Record<string, Slot>,
>(root: R, slots: S): R & S => Object.assign(root as never, slots)