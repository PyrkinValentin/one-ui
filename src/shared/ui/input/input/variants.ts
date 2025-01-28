import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type InputVariantsProps = VariantProps<typeof inputVariants>

export const inputVariants = tv({
	slots: {
		base: "group flex flex-col",
		label: "z-10 absolute block flex-shrink-0 pointer-events-none origin-top-left subpixel-antialiased",
		mainWrapper: "h-full",
		inputWrapper: "relative px-3 w-full inline-flex gap-3 flex-row items-center shadow-sm",
		innerWrapper: "box-border w-full h-full inline-flex items-center gap-1.5",
		input: [
			"w-full font-normal bg-transparent !outline-none focus-visible:outline-none file:cursor-pointer",
			"file:bg-transparent file:border-0 autofill:bg-transparent bg-clip-text",
		],
		clearButton: [
			"z-10 absolute -m-2 p-2 end-3 start-auto appearance-none select-none",
			"opacity-disabled hover:opacity-100 active:opacity-disabled rounded-full cursor-pointer outline-none",
			"focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2",
		],
		invalidMessage: "pt-1 flex flex-col gap-1.5 text-xs text-danger",
		description: "pt-1 text-xs text-default-400",
	},
	variants: {
		variant: {
			flat: {
				inputWrapper: "bg-default-100 hover:bg-default-200 has-[:focus-visible]:bg-default-100",
			},
			faded: {
				inputWrapper:
					"bg-default-100 border-2 border-default-200 hover:border-default-400 focus-within:border-default-400",
			},
			bordered: {
				inputWrapper:
					"border-2 border-default-200 hover:border-default-400 has-[:focus-visible]:border-default-foreground",
			},
			underlined: {
				label: [
					"group-has-[input:not(:placeholder-shown)]:text-foreground",
					"group-has-[input:focus-visible]:text-foreground",
				],
				inputWrapper: [
					"box-border relative !px-1 !pb-0 !gap-0 border-b-2 border-default-200 !rounded-none hover:border-default-300",
					"shadow-[0_1px_0px_0_rgba(0,0,0,0.05)] after:content-[''] after:origin-center after:absolute after:left-1/2",
					"after:-bottom-[2px] after:-translate-x-1/2 after:w-0 after:h-[2px] has-[:focus-visible]:after:w-full",
					"after:bg-default-foreground",
				],
				innerWrapper: "pb-1",
			},
		},
		size: {
			sm: {
				label: "text-xs",
				inputWrapper: "h-8 min-h-8 px-2 rounded-small text-md",
				input: "text-sm",
			},
			md: {
				label: "text-sm",
				inputWrapper: "h-10 min-h-10 rounded-medium text-lg",
				input: "text-sm",
			},
			lg: {
				label: "text-md",
				inputWrapper: "h-12 min-h-12 rounded-large text-xl",
				input: "text-medium",
			},
		},
		color: {
			default: "",
			primary: "",
			secondary: "",
			success: "",
			warning: "",
			danger: "",
		},
		rounded: {
			none: {
				inputWrapper: "rounded-none",
			},
			sm: {
				inputWrapper: "rounded-small",
			},
			md: {
				inputWrapper: "rounded-medium",
			},
			lg: {
				inputWrapper: "rounded-large",
			},
			full: {
				inputWrapper: "rounded-full",
			},
		},
		labelPlacement: {
			outside: {
				mainWrapper: "flex flex-col",
			},
			"outside-left": {
				base: "flex-row items-center flex-nowrap data-[has-helper=true]:items-start",
				inputWrapper: "flex-1",
				mainWrapper: "flex flex-col",
				label: "relative text-foreground pe-2 ps-2 pointer-events-auto",
			},
			inside: {
				label: "cursor-text",
				inputWrapper: "flex-col items-start justify-center gap-0",
				innerWrapper: "group-data-[has-label=true]:items-end",
			},
		},
		fullWidth: {
			true: {
				base: "w-full",
			},
		},
		clearable: {
			true: {
				input: "pe-6",
			},
		},
		required: {
			true: {
				label: "after:content-['*'] after:text-danger after:ms-0.5",
			},
		},
		readOnly: {
			true: {
				inputWrapper: "pointer-events-none",
			},
		},
		invalid: {
			true: {
				label: "text-danger",
				input: "placeholder:text-danger text-danger",
			},
		},
		disabled: {
			true: {
				base: "opacity-disabled pointer-events-none",
				inputWrapper: "pointer-events-none",
				label: "pointer-events-none",
			},
		},
		disableAnimation: {
			true: {
				label: "transition-none",
				inputWrapper: "transition-none",
				input: "transition-none",
			},
			false: {
				label: "transition-[transform,color,left,opacity] ease-out motion-reduce:transition-none",
				inputWrapper: "transition-[background] motion-reduce:transition-none",
				clearButton: "transition-opacity motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "flat",
		size: "md",
		color: "default",
		labelPlacement: "inside",
		fullWidth: true,
	},
	compoundVariants: [
		// flat & color
		{
			variant: "flat",
			color: "default",
			className: {
				label: "text-default-500",
				inputWrapper: "bg-default-100 text-foreground hover:bg-default-200 has-[:focus-visible]:bg-default-100",
				input: "placeholder:text-default-500",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				label: "text-primary",
				inputWrapper: "bg-primary-100 text-primary hover:bg-primary-50 has-[:focus-visible]:bg-primary-50",
				input: "placeholder:text-primary",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				label: "text-secondary",
				inputWrapper: "bg-secondary-100 hover:bg-secondary-50 text-secondary has-[:focus-visible]:bg-secondary-50",
				input: "placeholder:text-secondary",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				label: "text-success-600 dark:text-success",
				inputWrapper:
					"bg-success-100 text-success-600 dark:text-success hover:bg-success-50 has-[:focus-visible]:bg-success-50",
				input: "placeholder:text-success-600 dark:placeholder:text-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				label: "text-warning-600 dark:text-warning",
				inputWrapper:
					"bg-warning-100 text-warning-600 dark:text-warning hover:bg-warning-50 has-[:focus-visible]:bg-warning-50",
				input: "placeholder:text-warning-600 dark:placeholder:text-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				label: "text-danger dark:text-danger-500",
				inputWrapper:
					"bg-danger-100 text-danger dark:text-danger-500 hover:bg-danger-50 has-[:focus-visible]:bg-danger-50",
				input: "placeholder:text-danger dark:placeholder:text-danger-500",
			},
		},

		// labelPlacement=outside & default
		{
			labelPlacement: "outside",
			color: "default",
			className: {
				label:
					"group-has-[input:not(:placeholder-shown)]:text-foreground group-has-[input:focus-visible]:text-foreground",
			},
		},
		// radius-full & size
		{
			radius: "full",
			size: "sm",
			className: {
				inputWrapper: "px-3",
			},
		},
		{
			radius: "full",
			size: "md",
			className: {
				inputWrapper: "px-4",
			},
		},
		{
			radius: "full",
			size: "lg",
			className: {
				inputWrapper: "px-5",
			},
		},
		// !disableAnimation & variant
		{
			disableAnimation: false,
			variant: ["faded", "bordered"],
			className: {
				inputWrapper: "transition-colors motion-reduce:transition-none",
			},
		},
		{
			disableAnimation: false,
			variant: "underlined",
			className: {
				inputWrapper: "after:transition-[width] motion-reduce:after:transition-none",
			},
		},
		// flat & faded
		{
			variant: ["flat", "faded"],
			className: {
				inputWrapper: [
					"outline-none has-[:focus-visible]:z-10 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-focus",
					"has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-background",
				],
			},
		},
		// invalid & variant
		{
			invalid: true,
			variant: "flat",
			className: {
				inputWrapper: "bg-danger-50 hover:bg-danger-100 has-[:focus-visible]:bg-danger-50",
			},
		},
		{
			invalid: true,
			variant: "bordered",
			className: {
				inputWrapper: "border-danger has-[:focus-visible]:border-danger",
			},
		},
		{
			invalid: true,
			variant: "underlined",
			className: {
				inputWrapper: "after:bg-danger",
			},
		},
		// size & labelPlacement
		{
			labelPlacement: "inside",
			size: "sm",
			className: {
				inputWrapper: "h-12 py-1.5 px-3",
			},
		},
		{
			labelPlacement: "inside",
			size: "md",
			className: {
				inputWrapper: "h-14 py-2",
			},
		},
		{
			labelPlacement: "inside",
			size: "lg",
			className: {
				inputWrapper: "h-16 py-2.5 gap-0",
			},
		},
		// size & labelPlacement & variant=[faded, bordered]
		{
			labelPlacement: "inside",
			size: "sm",
			variant: ["bordered", "faded"],
			className: {
				inputWrapper: "py-1",
			},
		},
		// labelPlacement=[inside,outside]
		{
			labelPlacement: ["inside", "outside"],
			className: {
				label: [
					"group-has-[input:not(:placeholder-shown)]:pointer-events-auto",
					"group-has-[input:focus-visible]:pointer-events-auto",
				],
			},
		},
		// labelPlacement=[outside] & isMultiline
		{
			labelPlacement: "outside",
			className: {
				base: "relative justify-end",
				label: [
					"z-20 top-1/2 pb-0 -translate-y-1/2 group-has-[input:not(:placeholder-shown)]:start-0",
					"group-has-[input:focus-visible]:start-0",
				],
			},
		},
		// labelPlacement=[inside]
		{
			labelPlacement: "inside",
			className: {
				label: "group-has-[input:not(:placeholder-shown)]:scale-90 group-has-[input:focus-visible]:scale-90",
			},
		},
		// labelPlacement=[inside] & variant=flat
		{
			labelPlacement: "inside",
			variant: "flat",
			className: {
				innerWrapper: "pb-0.5",
			},
		},
		// variant=underlined & size
		{
			variant: "underlined",
			size: "sm",
			className: {
				innerWrapper: "pb-1",
			},
		},
		{
			variant: "underlined",
			size: ["md", "lg"],
			className: {
				innerWrapper: "pb-1.5",
			},
		},
		// inside & size
		{
			labelPlacement: "inside",
			size: ["sm", "md"],
			className: {
				label: "text-sm",
			},
		},
		{
			labelPlacement: "inside",
			size: "sm",
			className: {
				label: [
					"group-has-[input:not(:placeholder-shown)]:-translate-y-[calc(50%_+_theme(fontSize.xs)/2_-_8px)]",
					"group-has-[input:focus-visible]:-translate-y-[calc(50%_+_theme(fontSize.xs)/2_-_8px)]",
				],
			},
		},
		{
			labelPlacement: "inside",
			size: "md",
			className: {
				label: [
					"group-has-[&:not(input:placeholder-shown)]:-translate-y-[calc(50%_+_theme(fontSize.sm)/2_-_6px)]",
					"group-has-[input:focus-visible]:-translate-y-[calc(50%_+_theme(fontSize.sm)/2_-_6px)]",
				],
			},
		},
		{
			labelPlacement: "inside",
			size: "lg",
			className: {
				label: [
					"text-medium",
					"group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]",
				],
			},
		},
	],
})