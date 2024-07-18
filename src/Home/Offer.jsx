import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
function Offer() {
	return (
		<>
			<img
				src="static/Homepage/wave1.svg"
				className="absolute right-0 top-0 max-md:hidden  max-2xl:w-9/12 "
				alt=""
			/>
			<div className="flex md:justify-around gap-8">
				<div className=" relative z-20 flex flex-col main:gap-10 lg:gap-5 md:gap-3 gap-8 md:basis-1/2 justify-center max-md:items-center main:max-w-[648px]">
					{/* main:max-w-[648px] max-w-[450px] xl:pt-[92px]*/}
					<h1 className="font-oxanium main:text-[56px] lg:text-5xl text-4xl ">
						Next-Gen open source chat server
					</h1>
					<p className="text-color-default font-sofiaSans font-medium  md:text-xl text-2xl leading-[30px] text-justify">
						Unlock the potential of open source with a chat server that delivers
						personalized, secure, and scalable solutions for all your
						communication needs.
					</p>

					<a
						href="https://github.com/SAMA-Communications#getting-started"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							className={' max-lg:text-xl max-lg:px-6 max-lg:py-2 max-md:px-20'}
						>
							Try it now
						</Button>
					</a>
				</div>
				<div className="basis-1/2 z-20 relative  max-md:hidden">
					<img src="static/Homepage/Frame-124.svg" alt="" />
				</div>
			</div>
		</>
	)
}

export default Offer
