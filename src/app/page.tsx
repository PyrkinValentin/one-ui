import { Container } from "@/shared/ui/layout"
import { Textarea } from "@/shared/ui/textarea"

const Home = () => {
	return (
		<Container className="pt-12">
			<Textarea
				clearable
				autoFocus
				label="Description"
				variant="faded"
				color="warning"
				placeholder="Enter your description."
			/>
		</Container>
	)
}

export default Home