import React from 'react'
import Basics from '../About-us/Basics'
import Team from '../About-us/Team'
function About() {
	return (
		<div>
			<img
				src="static/About/bg-about.svg"
				className="absolute top-[-96px] left-0"
				alt=""
			/>
			<div className="z-10 relative w-full flex flex-col items-center">
				<div className=" flex flex-col gap-8 items-center font-oxanium w-[742px] ">
					<h6 className=" text-[28px] leading-6 ">A new sense of security</h6>
					<h1 className=" text-5xl leading-[56px] text-center">
						Giving you a freedom to communicate on your own terms
					</h1>
				</div>
				<div className="flex flex-col gap-8 items-center mt-20">
					<h5 className=" font-oxanium text-[32px] leading-[42px]">
						Our main idea
					</h5>
					<div className="flex flex-col gap-8 font-sofiaSans text-xl leading-[30px] !text-color-default w-[876px] ">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
				<Basics />
				<Team />
				<div className=" mt-[120px] flex gap-20 h-[225px] w-[1440px] justify-center items-center bg-gradient-to-r from-[#FD82D266] to-[#5F25BD66] mx-[-80px]">
					<div className="flex flex-col justify-center h-[120px]">
						<div className="flex items-center h-8">
							<img
								src="static/About/npm.svg"
								width={66.67}
								height={26.67}
								alt=""
							/>
						</div>
						<p className="mt-4 font-oxanium text-[32px] leading-[42px]">
							1.4M+
						</p>
						<p className=" font-sofiaSans font-normal text-xl leading-[30px]">
							Npm downloads
						</p>
					</div>
					<div className="flex flex-col">
						<img
							src="static/About/codicon_github.svg"
							width={32}
							height={32}
							alt=""
						/>
						<p className="mt-4 font-oxanium text-[32px] leading-[42px]">
							16,100+
						</p>
						<p className=" font-sofiaSans text-xl leading-[30px]">
							GitHub stars
						</p>
					</div>
					<div className="flex flex-col">
						<img
							src="static/About/prime_twitter.svg"
							width={32}
							height={32}
							alt=""
						/>
						<p className="mt-4 font-oxanium text-[32px] leading-[42px]">10K+</p>
						<p className=" font-sofiaSans text-xl leading-[30px]">
							X followers
						</p>
					</div>
					<div className="flex flex-col">
						<img src="static/About/discord.svg" width={32} height={32} alt="" />
						<p className="mt-4 font-oxanium text-[32px] leading-[42px]">
							6,600+
						</p>
						<p className=" font-sofiaSans text-xl leading-[30px]">
							Discord members
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
