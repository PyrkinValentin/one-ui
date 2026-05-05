import { Badge, Button } from "@/one-ui/components"

export default function Home() {
	return (
		<div className="mt-20 mx-auto w-full sm:w-xl flex flex-col items-center gap-4">
			<Badge size="sm" color="success">
				<Button>Button</Button>
				<Badge.Indicator/>
			</Badge>
		</div>
	)
}