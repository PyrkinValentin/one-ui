import type { ElementType } from "react"
import type { PopoverCloseProps, PopoverProps, PopoverTriggerProps } from "@/shared/ui/popover"
import type { ListBoxItemProps, ListBoxProps, ListBoxSectionProps } from "@/shared/ui/list-box"

export type DropdownProps = PopoverProps
export type DropdownTriggerProps = PopoverTriggerProps
export type DropdownCloseProps = PopoverCloseProps
export type DropdownMenuProps = ListBoxProps
export type DropdownMenuSectionProps = ListBoxSectionProps
export type DropdownMenuItemProps<As extends ElementType = "button"> = ListBoxItemProps<As>