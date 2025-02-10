import { Container } from "@/shared/ui/layout"
import { ListBox, ListBoxItem } from "@/shared/ui/list-box"

const Home = () => {
	return (
		<Container className="pt-12">
			<ListBox selectionMode="multiple">
				<ListBoxItem>Item 1</ListBoxItem>
				<ListBoxItem>Item 2</ListBoxItem>
				<ListBoxItem>Item 3</ListBoxItem>
			</ListBox>
		</Container>
	)
}

export default Home