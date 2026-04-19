export type * from "./switch.props"

import { composeComponent } from "../../utils"

import { SwitchRoot, SwitchThumb } from "./switch"

type SwitchSlots = {
	Thumb: typeof SwitchThumb
}

export const Switch = composeComponent<typeof SwitchRoot, SwitchSlots>(SwitchRoot, {
	Thumb: SwitchThumb,
})