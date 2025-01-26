import { Container } from "@/shared/ui/layout"
import { Tab, Tabs } from "@/shared/ui/tabs"

const Home = () => {
	return (
		<Container className="pt-12">
			<Tabs variant="underlined">
				<Tab label="Photos">Photos panel</Tab>
				<Tab label="Music">Music panel</Tab>
				<Tab label="Videos">Videos panel</Tab>
			</Tabs>
		</Container>
	)
}

export default Home