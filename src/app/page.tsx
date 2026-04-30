import { Card } from "@/one-ui/components"

export default function Home() {
	return (
		<div className="mt-20 mx-auto w-full sm:w-xl flex flex-col items-center gap-4">
			<Card>
				<Card.Content>
					<Card.Title>Become an Acme Creator!</Card.Title>

					<Card.Description>
						Visit the Acme Creator Hub to sign up today and start earning credits from your fans and followers.
					</Card.Description>
				</Card.Content>
			</Card>
		</div>
	)
}