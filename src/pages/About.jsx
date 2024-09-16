import React from 'react'
import Basics from '../About-us/Basics'
import Team from '../About-us/Team'
import ResumeBlock from '../About-us/ResumeBlock'
import { useTitle } from "react-use";

function About() {
  useTitle("About SAMA chat open source server");

	return (
		<div>
			<img
				src="static/About/bg-about.svg"
				className="absolute top-[-96px] left-0"
				alt=""
			/>
			<div className=" w-full flex flex-col items-center">
				<div className="z-30 flex flex-col md:gap-8 gap-4 items-center font-oxanium md:w-[742px] ">
					<p className=" sm:text-[28px] text-xl leading-6 ">
						A new sense of chat
					</p>
					<h1 className=" md:text-5xl sm:text-4xl xs:text-3xl text-2xl sm:leading-[56px] text-center">
						Simple but advanced technologies - in your hands
					</h1>
				</div>

				<div className="z-30 relative flex flex-col gap-8 font-sofiaSans text-xl leading-[30px] text-color-default lg:w-[876px]  mt-14">
					<p>
						A passionate team of developers, engineers, and technology
						enthusiasts dedicated to creating robust and efficient communication
						tools. Our mission is to make real-time communication seamless and
						secure for businesses of all sizes. With a commitment to innovation
						and excellence, we strive to deliver top-notch solutions that meet
						the evolving needs of our clients.
					</p>
					<p>
						Our vision is to revolutionize the way people communicate by
						providing reliable, secure, and innovative chat solutions. We
						believe in the power of real-time communication to transform
						businesses and foster meaningful connections.
					</p>
					<p>
						We are united by a common goal: to build the best chat server
						technology available. Our collaborative approach and commitment to
						continuous improvement drive us to exceed expectations and deliver
						exceptional value to our clients.
					</p>
				</div>

				<Basics />
				{/* <Team /> */}
				<ResumeBlock />
			</div>
		</div>
	)
}

export default About
