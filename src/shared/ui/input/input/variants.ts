import type { VariantProps } from "@/core/theme"

import { tv } from "@/core/theme"

export type InputVariantsProps = VariantProps<typeof inputVariants>

export const inputVariants = tv({
	slots: {
		base: "group flex",
		wrapper: "w-fit inline-flex flex-col",
		label: "subpixel-antialiased",
		inputWrapper: "relative inline-flex items-center gap-1.5 shadow-sm cursor-text",
		input: [
			"flex-1 font-normal bg-transparent outline-none focus-visible:outline-none file:cursor-pointer",
			"file:bg-transparent file:border-0 autofill:bg-transparent bg-clip-text",
		],
		clearButton: [
			"-m-2 p-2 appearance-none select-none rounded-full opacity-disabled hover:opacity-100 active:opacity-disabled",
			"outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus",
			"focus-visible:-outline-offset-[0.5rem]",
		],
		invalidMessage: "pt-1 flex flex-col gap-1.5 text-xs text-danger",
		description: "pt-1 text-xs text-default-400",
	},
	variants: {
		variant: {
			flat: "",
			faded: {
				inputWrapper: "bg-default-100 border-2 border-default-200",
			},
			bordered: {
				inputWrapper: "border-2 border-default-200 hover:border-default-400",
			},
			underlined: {
				inputWrapper: [
					"box-border relative !px-0 !rounded-none border-b-2 border-default-200 hover:border-default-300",
					"after:content-[''] after:origin-center after:absolute after:left-1/2 after:-bottom-[2px]",
					"after:-translate-x-1/2 after:w-0 after:h-[2px] has-[:focus-visible]:after:w-full",
					"shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
				],
			},
		},
		size: {
			sm: {
				label: "text-xs",
				inputWrapper: "h-8 min-h-8 px-2 rounded-small text-sm",
				input: "text-sm",
			},
			md: {
				label: "text-sm",
				inputWrapper: "h-10 min-h-10 px-3 rounded-medium text-md",
				input: "text-sm",
			},
			lg: {
				label: "text-md",
				inputWrapper: "h-12 min-h-12 px-3 rounded-large text-lg",
				input: "text-md",
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
			top: {
				base: "flex-col",
				label: "pb-2",
			},
			start: {
				base: "items-start",
				label: "shrink-0 me-2",
			},
		},
		fullWidth: {
			true: {
				wrapper: "w-full",
			},
		},
		clearable: {
			true: "",
		},
		required: {
			true: {
				label: "after:content-['*'] after:text-danger after:ms-0.5",
			},
		},
		readOnly: {
			true: {
				label: "pointer-events-none",
				inputWrapper: "pointer-events-none",
			},
		},
		invalid: {
			true: {
				label: "!text-danger",
				input: "!text-danger",
			},
		},
		disabled: {
			true: {
				inputWrapper: "opacity-disabled pointer-events-none",
			},
		},
		disableAnimation: {
			true: {
				label: "transition-none",
				inputWrapper: "transition-none",
				input: "transition-none",
				clearButton: "transition-none",
			},
			false: {
				label: "transition-colors motion-reduce:transition-none",
				input: "transition-colors motion-reduce:transition-none",
				clearButton: "transition-opacity motion-reduce:transition-none",
			},
		},
	},
	defaultVariants: {
		variant: "flat",
		size: "md",
		color: "default",
		labelPlacement: "top",
		fullWidth: true,
	},
	compoundVariants: [
		// flat & color
		{
			variant: "flat",
			color: "default",
			className: {
				inputWrapper: "bg-default-100 hover:bg-default-200 group-has-[:focus-visible]:bg-default-100",
				input: "placeholder:text-default-500",
			},
		},
		{
			variant: "flat",
			color: "primary",
			className: {
				label: "text-primary",
				inputWrapper: "bg-primary-100 text-primary hover:bg-primary-50 group-has-[:focus-visible]:bg-primary-50",
				input: "placeholder:text-primary",
			},
		},
		{
			variant: "flat",
			color: "secondary",
			className: {
				label: "text-secondary",
				inputWrapper: [
					"bg-secondary-100 text-secondary hover:bg-secondary-50",
					"group-has-[:focus-visible]:bg-secondary-50"
				],
				input: "placeholder:text-secondary",
			},
		},
		{
			variant: "flat",
			color: "success",
			className: {
				label: "text-success-600 dark:text-success",
				inputWrapper: [
					"bg-success-100 text-success-600 dark:text-success hover:bg-success-50",
					"group-has-[:focus-visible]:bg-success-50",
				],
				input: "placeholder:text-success-600 dark:placeholder:text-success",
			},
		},
		{
			variant: "flat",
			color: "warning",
			className: {
				label: "text-warning-600 dark:text-warning",
				inputWrapper: [
					"bg-warning-100 text-warning-600 dark:text-warning hover:bg-warning-50",
					"group-has-[:focus-visible]:bg-warning-50",
				],
				input: "placeholder:text-warning-600 dark:placeholder:text-warning",
			},
		},
		{
			variant: "flat",
			color: "danger",
			className: {
				label: "text-danger dark:text-danger-500",
				inputWrapper: [
					"bg-danger-100 text-danger dark:text-danger-500 hover:bg-danger-50",
					"group-has-[:focus-visible]:bg-danger-50",
				],
				input: "placeholder:text-danger dark:placeholder:text-danger-500",
			},
		},
		// faded & color
		{
			variant: "faded",
			color: "default",
			className: {
				inputWrapper: "hover:border-default-400 focus-within:border-default-400",
			},
		},
		{
			variant: "faded",
			color: "primary",
			className: {
				label: "text-primary",
				inputWrapper: "hover:border-primary focus-within:border-primary",
			},
		},
		{
			variant: "faded",
			color: "secondary",
			className: {
				label: "text-secondary",
				inputWrapper: "hover:border-secondary focus-within:border-secondary",
			},
		},
		{
			variant: "faded",
			color: "success",
			className: {
				label: "text-success",
				inputWrapper: "hover:border-success focus-within:border-success",
			},
		},
		{
			variant: "faded",
			color: "warning",
			className: {
				label: "text-warning",
				inputWrapper: "hover:border-warning focus-within:border-warning",
			},
		},
		{
			variant: "faded",
			color: "danger",
			className: {
				label: "text-danger",
				inputWrapper: "hover:border-danger focus-within:border-danger",
			},
		},
		// underlined & color
		{
			variant: "underlined",
			color: "default",
			className: {
				inputWrapper: "after:bg-default-foreground",
			},
		},
		{
			variant: "underlined",
			color: "primary",
			className: {
				label: "text-primary",
				inputWrapper: "after:bg-primary",
			},
		},
		{
			variant: "underlined",
			color: "secondary",
			className: {
				label: "text-secondary",
				inputWrapper: "after:bg-secondary",
			},
		},
		{
			variant: "underlined",
			color: "success",
			className: {
				label: "text-success",
				inputWrapper: "after:bg-success",
			},
		},
		{
			variant: "underlined",
			color: "warning",
			className: {
				label: "text-warning",
				inputWrapper: "after:bg-warning",
			},
		},
		{
			variant: "underlined",
			color: "danger",
			className: {
				label: "text-danger",
				inputWrapper: "after:bg-danger",
			},
		},
		// bordered & color
		{
			variant: "bordered",
			color: "default",
			className: {
				inputWrapper: "group-has-[:focus-visible]:border-default-foreground",
			},
		},
		{
			variant: "bordered",
			color: "primary",
			className: {
				label: "text-primary",
				inputWrapper: "group-has-[:focus-visible]:border-primary",
			},
		},
		{
			variant: "bordered",
			color: "secondary",
			className: {
				label: "text-secondary",
				inputWrapper: "group-has-[:focus-visible]:border-secondary",
			},
		},
		{
			variant: "bordered",
			color: "success",
			className: {
				label: "text-success",
				inputWrapper: "group-has-[:focus-visible]:border-success",
			},
		},
		{
			variant: "bordered",
			color: "warning",
			className: {
				label: "text-warning",
				inputWrapper: "group-has-[:focus-visible]:border-warning",
			},
		},
		{
			variant: "bordered",
			color: "danger",
			className: {
				label: "text-danger",
				inputWrapper: "group-has-[:focus-visible]:border-danger",
			},
		},
		{
			labelPlacement: "start",
			size: "sm",
			className: {
				label: "mt-2",
			},
		},
		{
			labelPlacement: "start",
			size: "md",
			className: {
				label: "mt-2.5",
			},
		},
		{
			labelPlacement: "start",
			size: "lg",
			className: {
				label: "mt-3",
			},
		},
		// !disableAnimation & variant
		{
			disableAnimation: false,
			variant: "flat",
			className: {
				inputWrapper: "transition-[background] motion-reduce:transition-none",
			},
		},
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
		// variant: underline & labelPlacement
		{
			variant: "underlined",
			labelPlacement: "top",
			className: {
				label: "pb-0",
			},
		},
		// invalid & variant
		{
			invalid: true,
			variant: "flat",
			className: {
				inputWrapper: "bg-danger-50 hover:bg-danger-100 group-has-[:focus-visible]:bg-danger-50",
			},
		},
		{
			invalid: true,
			variant: "bordered",
			className: {
				inputWrapper: "border-danger hover:border-danger group-has-[:focus-visible]:border-danger",
			},
		},
		{
			invalid: true,
			variant: "underlined",
			className: {
				inputWrapper: "after:bg-danger",
			},
		},
	],
})