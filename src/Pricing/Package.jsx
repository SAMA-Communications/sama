import React from 'react'
import Button from '../components/Button'
function Package({ title, price, points, headers }) {
	return (
		<div className="relative bg-light-purp rounded-[40px] sm:w-[433px] w-80 h-[524px] mb-10 ">
			<div className="font-oxanium pt-10 pl-12 ">
				<h3 className="  text-[32px] leading-[42px]">{title}</h3>
				<h4 className=" text-2xl leading-6 mt-4 text-[#E9E8F4]">{price} </h4>
			</div>
			<div
				className=" absolute top-[162px] bg-[#E9E8F4] sm:w-[437px] w-80
			 flex flex-col pl-12 py-10 rounded-t-[75px] rounded-b-[40px] gap-10"
			>
				<div>
					{!!headers?.length > 0 && (
						<div>
							{headers.map((item, index) => (
								<h3
									key={index}
									className=" font-oxanium text-[32px] leading-[42px] text-mid-purp mb-4"
								>
									{item}
								</h3>
							))}
						</div>
					)}

					<ul className="flex flex-col gap-4 ">
						{points.map((item, index) => (
							<li key={index} className="flex gap-4">
								<img src="static/Pricing/check_24px.svg" alt="" />
								<p className=" font-sofiaSans font-medium text-2xl leading-6 text-mid-purp">
									{item}
								</p>
							</li>
						))}
					</ul>
				</div>
				<Button>Choose Plan</Button>
			</div>
		</div>
	)
}

export default Package
