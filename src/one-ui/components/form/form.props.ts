import type { Form } from "@base-ui/react"

export type FormProps<FormValues extends Record<string, unknown> = Record<string, unknown>> = Form.Props<FormValues>