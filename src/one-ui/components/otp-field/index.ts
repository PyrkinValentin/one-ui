export type * from "./otp-field.props"

import { composeComponent } from "../../utils"

import { OTPFieldRoot, OTPFieldInput, OTPFieldSeparator } from "./otp-field"

type OTPFieldSlots = {
	Input: typeof OTPFieldInput
	Separator: typeof OTPFieldSeparator
}

export const OTPField = composeComponent<typeof OTPFieldRoot, OTPFieldSlots>(OTPFieldRoot, {
	Input: OTPFieldInput,
	Separator: OTPFieldSeparator,
})