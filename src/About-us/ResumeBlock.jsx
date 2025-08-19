import React from 'react'
import Button from '../components/Button'
function ResumeBlock() {
	return (
		<>
			{/* <div className=" absolute min-[854px]:h-[225px] xs:h-[340px] h-[660px] bottom-0 w-full bg-gradient-to-r from-[#FD82D266] to-[#5F25BD66]"></div>
			<div className=" mt-[120px] grid min-[854px]:grid-cols-4 xs:grid-cols-2 grid-cols-1 max-[853px]:grid-rows-2 max-xs:grid-rows-4 gap-[10px] xl:w-2/3 w-full min-[854px]:h-[200px] items-center justify-items-center z-10  ">
				<div className="flex flex-col h-[150px] max-[853px]:w-[160px] ">
					<div className="flex items-center h-8">
						<img
							src="static/About/npm.svg"
							width={66.67}
							height={26.67}
							alt=""
						/>
					</div>
					<p className="mt-4 font-oxanium text-[32px] leading-[42px]">1.4M+</p>
					<p className=" font-sofiaSans font-normal text-xl leading-[30px]">
						Npm downloads
					</p>
				</div>
				<div className="flex flex-col h-[150px] max-[853px]:w-[160px] ">
					<img
						src="static/About/codicon_github.svg"
						width={32}
						height={32}
						alt=""
					/>
					<p className="mt-4 font-oxanium text-[32px] leading-[42px]">
						16,100+
					</p>
					<p className=" font-sofiaSans text-xl leading-[30px]">GitHub stars</p>
				</div>
				<div className="flex flex-col h-[150px] max-[853px]:w-[160px]">
					<img
						src="static/About/prime_twitter.svg"
						width={32}
						height={32}
						alt=""
					/>
					<p className="mt-4 font-oxanium text-[32px] leading-[42px]">10K+</p>
					<p className=" font-sofiaSans text-xl leading-[30px]">X followers</p>
				</div>
				<div className="flex flex-col h-[150px] max-[853px]:w-[160px]">
					<img src="static/About/discord.svg" width={32} height={32} alt="" />
					<p className="mt-4 font-oxanium text-[32px] leading-[42px]">6,600+</p>
					<p className=" font-sofiaSans text-xl leading-[30px]">
						Discord members
					</p>
				</div>
			</div> */}
			<div className="my-20">
				<p className="font-oxanium md:text-5xl sm:text-4xl xs:text-3xl text-2xl sm:leading-[56px] text-center">
					It’s simple but advanced
				</p>
				<p className="sm:text-[28px] text-xl leading-6 text-center mt-10">
					Next-Gen open source chat server
				</p>
				<div className="flex justify-center">
					<a
						href="https://docs.samacloud.io/overview/quick-start/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							className={
								'mt-10 self-center max-lg:text-xl max-lg:px-6 max-lg:py-2 max-md:px-20'
							}
						>
							Get started
						</Button>
					</a>
				</div>
			</div>
		</>
	)
}

export default ResumeBlock
