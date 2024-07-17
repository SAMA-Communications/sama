import React from 'react'

function Stack() {
	return (
		<div className="mt-24 flex relative justify-around">
			<div className="flex flex-col gap-10 ml-32 font-oxanium">
				<h2 className="  text-4xl leading-[68px]">SAMA stack</h2>
				<div className=" flex flex-col gap-6 text-[28px] leading-6">
					<p>
						A modern frontend for your{' '}
						<span className=" text-light-purp">conversations</span>
					</p>
					<p>
						A clustering supported backend for large{' '}
						<span className=" text-light-purp">loads</span>
					</p>
					<p>
						An admin dashboard for managing{' '}
						<span className=" text-light-purp">purpose</span>
					</p>
					<p>
						An easy-to-use <span className=" text-light-purp">API</span>
					</p>
				</div>
			</div>
			<img src="/static/Homepage/squares-3.svg" className=" mt-9" alt="" />
			{/* <img
				src="/static/Homepage/squares-3.svg"
				className="absolute left-[845px] mt-9"
				alt=""
			/> */}
		</div>
	)
}

export default Stack
