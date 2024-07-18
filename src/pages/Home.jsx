import React from 'react'
import Offer from '../Home/Offer'
import Features from '../Home/Features'
import Stack from '../Home/Stack'
import Release from '../Home/Release'
//3178 main pxs
export default function Home() {
	return (
		<>
			<Offer />
			<Features />
			<Stack />
			<Release />
			<div className="lg:mt-96 mt-64 pb-28 flex justify-center gap-5 z-10 relative">
				<div>
					<img src="/static/Homepage/quotes.svg" alt="" />
				</div>
				<div className="font-oxanium xl:text-[28px] lg:text-2xl md:text-lg lg:leading-6 text-center flex flex-col gap-6">
					<div className="lg:h-8">
						We believe privacy is a fundamental human right.
					</div>
					<div className=" lg:h-8">
						With our products, stay protected everywhere and anytime.
					</div>
				</div>
				<div>
					<img src="/static/Homepage/quotes.svg" alt="" />
				</div>
			</div>
		</>
	)
}
