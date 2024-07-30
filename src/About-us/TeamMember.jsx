import React from 'react'

function TeamMember({ initials, position }) {
	return (
		<div className="flex gap-6">
			<img src="static/About/doggy.svg" alt="" />
			<div className="flex flex-col gap-2">
				<h4 className=" font-oxanium xs:text-2xl text-xl leading-6">
					{initials}
				</h4>
				<p className=" font-sofiaSans text-xl leading-[30px] text-color-default">
					{position}
				</p>
			</div>
		</div>
	)
}

export default TeamMember
