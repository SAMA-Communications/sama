import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

function Release() {
	return (
		<>
			<img
				src="/static/Homepage/last-bg.svg"
				className="absolute  main:top-[1851px] lg:top-[2200px]  max-lg:hidden main:left-0 xl:left-[-100px] left-[-250px] "
				alt=""
			/>
			<div className="xl:mt-52 flex z-10 relative xl:justify-around lg:justify-end  ">
				<div className=" max-[2000px]:basis-1/2 max-lg:hidden">
					<img
						src="/static/Homepage/iphone.svg"
						className="absolute top-[40px] main:left-[379px] xl:left-[200px] left-[100px]"
						alt=""
					/>
					<img
						src="/static/Homepage/iphone.svg"
						className="absolute top-[254px] main:left-[255px] xl:left-[100px] left-[0px]"
						alt=""
					/>
				</div>
				<div className=" w-[648px] mt-[108px] flex flex-col gap-14 max-lg:ml-16 max-md:ml-0">
					<div className=" flex flex-col gap-8  ">
						<h2 className=" font-oxanium  sm:text-4xl text-3xl leading-[50px]">
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
					<Link to="contacts" className="max-xl:self-center">
						<Button
							className={' max-lg:text-xl max-lg:px-6 max-lg:py-2 max-md:px-16'}
						>
							Contact us
						</Button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Release
