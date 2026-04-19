type Slot = (...args: never[]) => unknown

export const composeComponent = <
	Root extends Slot,
	Slots extends Record<string, Slot>,
>(root: Root, slots: Slots): Root & Slots => Object.assign(root as never, slots)