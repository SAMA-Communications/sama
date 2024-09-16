import React from 'react'
import { twMerge } from 'tailwind-merge'
function Button({ children, disable, type, className }) {
	return (
		<button
			disabled={disable}
			type={type}
			className={twMerge(
				'bg-[#958CF8] py-[22px] px-8 rounded-[40px] font-sofiaSans font-medium text-2xl leading-5 text-white w-fit',
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
