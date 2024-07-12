import React from 'react'

function TeamMember({ initials, position }) {
	return (
		<div className="flex gap-6">
			<img src="static/About/doggy.svg" alt="" />
			<div className="flex flex-col gap-2">
				<h4 className=" font-oxanium text-2xl leading-6">{initials} </h4>
				<p className=" font-sofiaSans text-xl leading-[30px] text-color-default">
					{position}
				</p>
				<img src="static/About/in.svg" width="24" height="24" alt="" />
			</div>
		</div>
	)
}

export default TeamMember
