import { Skeleton } from "@/one-ui/components"

export default function Home() {
	return (
		<div className="mt-20 mx-auto w-full sm:w-xl p-20 flex flex-col gap-4">
			<div className="w-62.5 flex flex-col gap-4 rounded-lg bg-transparent p-4">
				<Skeleton className="h-32"/>

				<div className="flex flex-col gap-2">
					<Skeleton className="h-3 w-3/5"/>
					<Skeleton className="h-3 w-4/5"/>
					<Skeleton className="h-3 w-2/5"/>
				</div>
			</div>
		</div>
	)
}