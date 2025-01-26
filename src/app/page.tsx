import { Container } from "@/shared/ui/layout"
import { CircularProgress } from "@/shared/ui/progress"

const Home = () => {
	return (
		<Container className="pt-12">
			<CircularProgress
				indeterminate
				disableAnimation
				value={10}
				label="Value label"
				color="primary"
			/>
		</Container>
	)
}

export default Home