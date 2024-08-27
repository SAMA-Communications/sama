import React from 'react'

function Stack() {
	return (
		<div className="mt-24 flex max-xl:flex-col relative xl:justify-around  ">
			<div className="flex flex-col lg:gap-10 gap-5 2xl:ml-32 font-oxanium max-xl:ml-32 max-lg:ml-16 max-md:ml-0">
				<h2 className="  sm:text-4xl text-3xl leading-[68px]">SAMA stack</h2>
				<div className=" flex flex-col gap-6 main:text-[28px] sm:text-2xl text-lg leading-6 ">
					<p>
						A modern frontend for your{' '}
						<a
							href="https://github.com/SAMA-Communications/sama-client"
							target="_blank"
							rel="noopener noreferrer"
							className=" text-light-purp"
						>
							conversations
						</a>
					</p>
					<p>
						A clustering supported backend for large{' '}
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className=" text-light-purp"
						>
							loads
						</a>
					</p>
					<p>
						An admin dashboard for managing{' '}
						<a
							href="https://github.com/SAMA-Communications/sama-server-dashboard"
							target="_blank"
							rel="noopener noreferrer"
							className=" text-light-purp"
						>
							purpose
						</a>
					</p>
					<p>
						An easy-to-use{' '}
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className=" text-light-purp"
						>
							API
						</a>
					</p>
				</div>
			</div>
			<div className="  mt-9 max-md:hidden self-end ">
				<img src="/static/Homepage/squares-3.svg" alt="" />
			</div>
		</div>
	)
}

export default Stack
