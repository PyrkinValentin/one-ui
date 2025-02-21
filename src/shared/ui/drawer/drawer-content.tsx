"use client"

import type { MouseEvent } from "react"
import type { DrawerContentProps } from "./types"

import { useTransition } from "@/shared/hooks/use-transition"

import { mergeRefs } from "@/shared/utils/merge"

import { FloatingFocusManager, FloatingOverlay } from "@floating-ui/react"
import { MdClear } from "react-icons/md"
import { Portal } from "@/shared/ui/system"

import { useDrawerContext } from "./drawer"

const transitionSlideStyles = {
	top: {
		initial: {
			transform: "translateY(-100%)"
		},
		enter: {
			transform: "translateY(0%)"
		},
	},
	bottom: {
		initial: {
			transform: "translateY(100%)"
		},
		enter: {
			transform: "translateY(0)"
		},
	},
	left: {
		initial: {
			transform: "translateX(-100%)"
		},
		enter: {
			transform: "translateX(0%)"
		},
	},
	right: {
		initial: {
			transform: "translateX(100%)"
		},
		enter: {
			transform: "translateX(0)"
		},
	},
}

export const DrawerContent = (props: DrawerContentProps) => {
	const {
		lockScroll,
		disablePortal,
		disableAnimation,
		hideCloseButton,
		closeButtonIcon,
		placement,
		context,
		refs,
		classNames,
		getFloatingProps,
		slotProps = {},
	} = useDrawerContext()

	const {
		ref,
		style,
		className,
		children,
		...restProps
	} = props

	const {
		backdropProps,
		focusManagerProps,
		wrapperProps,
		closeButtonProps,
	} = slotProps

	const [mounted, fadeStyle] = useTransition(context?.open, {
		enabled: !disableAnimation,
		initial: { opacity: 0 },
		enter: { opacity: 1 },
	})

	const [, slideStyle] = useTransition(context?.open, {
		enabled: !disableAnimation,
		...transitionSlideStyles[placement ?? "right"]
	})

	const handleClickClose = (ev: MouseEvent<HTMLButtonElement>) => {
		closeButtonProps?.onClick?.(ev)
		context?.onOpenChange(false, undefined, "click")
	}

	return (
		<>
			{mounted && context ? (
				<Portal disablePortal={disablePortal}>
					<FloatingOverlay
						lockScroll={lockScroll}
						{...backdropProps}
						className={classNames?.backdrop()}
						style={{
							...fadeStyle,
							...backdropProps?.style,
						}}
					/>

					<FloatingFocusManager
						context={context}
						{...focusManagerProps}
					>
						<div
							{...wrapperProps}
							className={classNames?.wrapper({ className: wrapperProps?.className })}
						>
							<div
								ref={mergeRefs(ref, refs?.setFloating)}
								className={classNames?.base({ className })}
								style={{
									...slideStyle,
									...style,
								}}
								{...getFloatingProps?.(restProps)}
							>
								{!hideCloseButton ? (
									<button
										{...closeButtonProps}
										className={classNames?.closeButton({ className: closeButtonProps?.className })}
										onClick={handleClickClose}
									>
										{closeButtonIcon ?? <MdClear/>}
									</button>
								) : null}

								{children}
							</div>
						</div>
					</FloatingFocusManager>
				</Portal>
			) : null}
		</>
	)
}