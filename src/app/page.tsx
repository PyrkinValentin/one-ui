"use client"

import { Container } from "@/shared/ui/layout"
import { Tooltip } from "@/shared/ui/tooltip"
import { Transition } from "@/shared/ui/transition/transition";
import { useState } from "react";
import { Button } from "@/shared/ui/button";

const Home = () => {
	const [open, setOpen] = useState(false)

	return (
		<Container className="pt-12 space-y-5">
			<Tooltip
				arrow
				defaultOpen
				placement="bottom"
				content="I am a tooltip!"
				className="bg-primary px-2 py-1 shadow-medium"
			>
				Hello world
			</Tooltip>

			<Button onClick={() => setOpen(!open)}>Transition</Button>

			<Transition
				open={open}
				initial={{ opacity: 0 }}
				enter={{ opacity: 1 }}
			>
				Hello transition
			</Transition>
		</Container>
	)
}

export default Home