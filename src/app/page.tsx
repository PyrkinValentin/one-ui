"use client"

import { useState } from "react"

import { Container } from "@/shared/ui/layout"
import { Collapse } from "@/shared/ui/transition"

const Home = () => {
	const [animate, setAnimate] = useState(false)

	return (
		<Container>
			<button onClick={() => setAnimate(!animate)}>Animate</button>

			<Collapse open={animate}>
				<div className="bg-danger overflow-hidden">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo
					consequat.
				</div>
			</Collapse>
		</Container>
	)
}

export default Home