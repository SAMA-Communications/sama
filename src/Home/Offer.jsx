import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
function Offer() {
	return (
		<>
			<img
				src="static/Homepage/wave1.svg"
				className="absolute right-0 top-[-96px]"
				alt=""
			/>
			<div className="flex justify-center gap-2">
				<div className="pt-[92px] relative z-20 flex flex-col gap-10 max-w-[648px]">
					<h1 className="font-oxanium text-[56px] ">
						Next-Gen open source chat server
					</h1>
					<p className="text-color-default font-sofiaSans font-medium  text-xl leading-[30px]">
						Unlock the potential of open source with a chat server that delivers
						personalized, secure, and scalable solutions for all your
						communication needs.
					</p>
					<a
						href="https://github.com/SAMA-Communications#getting-started"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button>Try it now</Button>
					</a>
				</div>
				<div>
					<img
						src="static/Homepage/Frame-124.svg"
						className="z-20 relative "
						alt=""
					/>
				</div>
			</div>
		</>
	)
}

export default Offer
