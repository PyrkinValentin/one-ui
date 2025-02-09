import { Container } from "@/shared/ui/layout"
import { ListBox, ListBoxItem, ListBoxSection } from "@/shared/ui/list-box_2"

const Home = () => {
	return (
		<Container className="pt-12">
			<ListBox selectionMode="single">
				<ListBoxSection showDivider title="Section 1">
					<ListBoxItem>Item 1</ListBoxItem>
					<ListBoxItem>Item 2</ListBoxItem>
					<ListBoxItem>Item 3</ListBoxItem>
				</ListBoxSection>

				<ListBoxSection title="Section 2">
					<ListBoxItem>Item 4</ListBoxItem>
					<ListBoxItem>Item 5</ListBoxItem>
					<ListBoxItem>Item 6</ListBoxItem>
				</ListBoxSection>

				<ListBoxItem>Item 7</ListBoxItem>
				<ListBoxItem>Item 8</ListBoxItem>
				<ListBoxItem>Item 9</ListBoxItem>
			</ListBox>
		</Container>
	)
}

export default Home