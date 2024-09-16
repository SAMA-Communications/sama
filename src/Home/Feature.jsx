import React from 'react'

function Feature({ svg, title, text, points }) {
	return (
		<div className="sm:w-[437px] w-80 h-[342px] rounded-[40px] p-6 bg-mid-purp border border-transparent hover:border-light-purp shadow-[0_4px_4px_#00000040]">
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-4">
					<img src={svg} alt="Feature image" />
					<p className=" font-oxanium text-2xl ">{title}</p>
				</div>
				<div className="h-[90px]">
					<p className=" font-sofiaSans font-medium text-base leading-[30px]">
						{text}
					</p>
				</div>
				<div>
					<ul className="flex flex-col gap-2">
						{points.map((check, index) => (
							<li key={index} className="flex gap-2">
								<img src="/static/Homepage/check_24px.svg" alt="Checkmark icon" />
								<p className="font-sofiaSans font-medium">{check}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Feature
