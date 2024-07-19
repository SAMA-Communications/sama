import React from 'react'

function Basic({ title, description }) {
	return (
		<div>
			<div className="flex gap-4">
				<img src="static/About/Rectangle.svg" alt="" />
				<h5 className=" sm:text-[32px] text-xl leading-[42px]">{title}</h5>
			</div>
			<p className=" sm:text-2xl text-lg leading-6 text-color-default mt-4">
				{description}
			</p>
		</div>
	)
}

export default Basic
