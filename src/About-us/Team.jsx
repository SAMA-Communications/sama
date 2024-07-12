import React from 'react'
import TeamMember from './TeamMember'
function Team() {
	return (
		<div className="mt-20 ">
			<h4 className=" font-oxanium text-[32px] leading-[42px] text-center ">
				Our team
			</h4>
			<div className=" flex gap-28 mt-[71px] w-[864px]">
				<div className="flex flex-col gap-12 basis-1/2 ">
					<TeamMember initials={'Name Surname'} position={'Position in team'} />

					<TeamMember initials={'Name Surname'} position={'Position in team'} />
				</div>
				<div className="flex flex-col gap-12  basis-1/2 ">
					<TeamMember initials={'Name Surname'} position={'Position in team'} />

					<TeamMember initials={'Name Surname'} position={'Position in team'} />
				</div>
			</div>
		</div>
	)
}

export default Team
