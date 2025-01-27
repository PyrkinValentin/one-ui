import { Container } from "@/shared/ui/layout"
import { LinearProgress } from "@/shared/ui/progress"

const Home = () => {
	return (
		<Container className="pt-12">
			<LinearProgress
				value={46}
				label="Recent"
				showValueLabel
				striped
			/>
		</Container>
	)
}

export default Home