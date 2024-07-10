import React from 'react'
import Button from '../components/Button'

function Offer() {
	return (
		<>
			<img
				src="static/Homepage/wave1.svg"
				className="absolute left-[296.02px] top-[-96px]"
				alt=""
			/>
			<div className="flex  gap-2">
				<div className="pt-[92px] relative z-20 flex flex-col gap-10 max-w-[648px]">
					<h1 className="font-oxanium text-[56px] ">
						Next-Gen open source chat server
					</h1>
					<p className="text-color-default font-sofiaSans font-medium  text-xl leading-[30px]">
						Unlock the potential of open source with a chat server that delivers
						personalized, secure, and scalable solutions for all your
						communication needs.
					</p>
					<Button>Try it now</Button>
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
