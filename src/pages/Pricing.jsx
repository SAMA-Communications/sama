import React from 'react'
import Packages from '../Pricing/Packages'
function Pricing() {
	return (
		<div>
			<img
				src="static/Pricing/bg-pricing.svg"
				className="absolute top-[-96px] left-[0]"
				alt=""
			/>
			<div className="z-10 relative">
				<div className="flex flex-col items-center gap-8">
					<h1 className=" font-oxanium text-5xl leading-[42px]">
						SAMA Pricing
					</h1>
					<p className=" font-sofiaSans text-xl leading-[30px] text-color-default">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<Packages />
			</div>
		</div>
	)
}

export default Pricing
