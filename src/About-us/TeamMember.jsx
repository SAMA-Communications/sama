import React from 'react'

function TeamMember({ initials, position }) {
	return (
		<div className="flex gap-6">
			<img src="static/About/doggy.svg" alt="Team member profile image" />
			<div className="flex flex-col gap-2">
				<p className=" font-oxanium xs:text-2xl text-xl leading-6">
					{initials}
				</p>
				<p className=" font-sofiaSans text-xl leading-[30px] text-color-default">
					{position}
				</p>
			</div>
		</div>
	)
}

export default TeamMember
