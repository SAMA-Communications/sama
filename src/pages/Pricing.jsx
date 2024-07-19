import React from 'react'
import Packages from '../Pricing/Packages'
function Pricing() {
	return (
		<div>
			<img
				src="static/Pricing/bg-pricing.svg"
				className="absolute top-[-96px] right-[0] max-main:hidden"
				alt=""
			/>
			<div className="z-10 relative">
				<div className="flex flex-col items-center md:gap-8 gap-4">
					<h1 className=" font-oxanium xs:text-5xl leading-[42px] text-4xl">
						SAMA Pricing
					</h1>
					<p className=" font-sofiaSans text-xl leading-[30px] text-color-default max-md:text-center">
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
