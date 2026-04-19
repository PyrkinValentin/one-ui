import { Drawer } from "@/one-ui/components"

export default function Home() {
	return (
		<div className="mt-20 mx-auto w-full sm:w-lg p-20 flex flex-col items-center gap-4">
			<Drawer>
				<Drawer.Trigger>Trigger</Drawer.Trigger>

				<Drawer.Popup>
					<Drawer.Title>Title</Drawer.Title>
					<Drawer.Description>Description</Drawer.Description>
				</Drawer.Popup>
			</Drawer>
		</div>
	)
}