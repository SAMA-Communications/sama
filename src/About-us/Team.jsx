import React from 'react'
import TeamMember from './TeamMember'
function Team() {
	return (
		<div className="mt-20 ">
			<p className=" font-oxanium sm:text-[32px] text-2xl leading-[42px] text-center ">
				Our team
			</p>
			<div className=" flex max-md:flex-col gap-28 mt-[71px] lg:w-[864px]">
				<div className="flex flex-col md:gap-12 gap-28 basis-1/2 ">
					<TeamMember initials={'Name Surname'} position={'Position in team'} />

					<TeamMember initials={'Name Surname'} position={'Position in team'} />
				</div>
				<div className="flex flex-col md:gap-12 gap-28 basis-1/2 ">
					<TeamMember initials={'Name Surname'} position={'Position in team'} />

					<TeamMember initials={'Name Surname'} position={'Position in team'} />
				</div>
			</div>
		</div>
	)
}

export default Team
