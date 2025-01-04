import { Container, Grid } from "@/shared/ui/layout"

const Home = () => {
	return (
		<Container>
			<Grid container gap="2">
				<Grid size="6" className="bg-primary">Grid</Grid>
				<Grid size="6" className="bg-secondary">Grid</Grid>
				<Grid size="12" className="bg-danger">Grid</Grid>
			</Grid>
		</Container>
	)
}

export default Home