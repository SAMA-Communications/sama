import React from 'react'
import Button from '../components/Button'
function Release() {
	return (
		<>
			<img
				src="/static/Homepage/last-bg.svg"
				className="absolute top-[1851px] left-0"
				alt=""
			/>
			<div className="mt-52 flex z-10 relative ">
				<div className=" relative basis-1/2">
					<img
						src="/static/Homepage/iphone.svg"
						className="absolute top-[40px] left-[379px]"
						alt=""
					/>
					<img
						src="/static/Homepage/iphone.svg"
						className="absolute top-[254px] left-[255px]"
						alt=""
					/>
					{/* top-[2153px] */}
				</div>
				<div className=" w-[648px] mt-[108px] flex flex-col gap-14">
					<div className=" flex flex-col gap-8">
						<h2 className=" font-oxanium text-4xl leading-[50px]">
							Release SAMA under your brand
						</h2>
						<p className="  font-sofiaSans text-xl text-color-default">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<Button>Contact us</Button>
				</div>
			</div>
		</>
	)
}

export default Release
