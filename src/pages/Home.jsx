import React from 'react'
import Offer from '../Home/Offer'
import Features from '../Home/Features'
import Stack from '../Home/Stack'
import Release from '../Home/Release'
//3178 main pxs
export default function Home() {
	return (
		<div className="bg-bg-color relative px-10 ">
			<Offer />
			<Features />
			<Stack />
			<Release />
			<div className="mt-96 pb-28 flex justify-center ">
				<img src="/static/Homepage/quotes.svg" alt="" />
				<div className="font-oxanium text-[28px] leading-6 text-center flex flex-col gap-6">
					<div className="h-8">
						We believe privacy is a fundamental human right.
					</div>
					<div className=" h-8">
						With our products, stay protected everywhere and anytime.
					</div>
				</div>
				<img src="/static/Homepage/quotes.svg" alt="" />
			</div>
		</div>
	)
}
