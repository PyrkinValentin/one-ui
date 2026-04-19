import type { Tooltip } from "@base-ui/react"

export type TooltipProviderProps = Tooltip.Provider.Props
export type TooltipProps<Payload = unknown> = Tooltip.Root.Props<Payload>
export type TooltipTriggerProps<Payload = unknown> = Tooltip.Trigger.Props<Payload>
export type TooltipPortalProps = Tooltip.Portal.Props
export type TooltipPositionerProps = Tooltip.Positioner.Props
export type TooltipPopupProps = Tooltip.Popup.Props
export type TooltipArrowProps = Tooltip.Arrow.Props