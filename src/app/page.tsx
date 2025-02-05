import { Container } from "@/shared/ui/layout"
import { Accordion, AccordionItem } from "@/shared/ui/accordion"

const Home = () => {
	return (
		<Container className="pt-12">
			<Accordion>
				<AccordionItem title="Accodrion 1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</AccordionItem>

				<AccordionItem title="Accodrion 2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</AccordionItem>

				<AccordionItem title="Accodrion 3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</AccordionItem>
			</Accordion>
		</Container>
	)
}

export default Home