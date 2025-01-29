import { Container } from "@/shared/ui/layout"
import { Textarea } from "@/shared/ui/textarea"

const Home = () => {
	return (
		<Container className="pt-12">
			<Textarea
				autosize
				clearable
			/>
		</Container>
	)
}

export default Home