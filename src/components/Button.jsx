import React from 'react'

function Button({ children }) {
	return (
		<button className=" bg-[#958CF8] py-[22px] px-8 rounded-[40px] font-sofiaSans font-medium text-2xl leading-5 text-white w-fit">
			{children}
		</button>
	)
}

export default Button
