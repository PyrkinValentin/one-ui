export type * from "./combobox.props"

import { composeComponent } from "../../utils"

import {
	ComboboxRoot,
} from "./combobox"

type ComboboxSlots = {}

export const Combobox = composeComponent<typeof ComboboxRoot, ComboboxSlots>(ComboboxRoot, {})