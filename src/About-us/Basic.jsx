import React from 'react'

function Basic({ title, description }) {
	return (
		<div>
			<div className="flex gap-4">
				<img src="static/About/Rectangle.svg" alt="" />
				<h5 className=" text-[32px] leading-[42px]">{title}</h5>
			</div>
			<p className=" text-2xl leading-6 text-color-default mt-4">
				{description}
			</p>
		</div>
	)
}

export default Basic
