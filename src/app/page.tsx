import { Container } from "@/shared/ui/layout"
import { Slider } from "@/shared/ui/slider"

const Home = () => {
	return (
		<Container className="pt-12 space-y-5">
			<Slider showTooltip/>
		</Container>
	)
}

export default Home