import React from 'react'
import Basic from './Basic'
function Basics() {
	return (
		<div className="flex flex-col gap-8 lg:w-[876px] mt-20 font-oxanium">
			<Basic
				title={'Interoperable'}
				description={
					'Break down communication silos using the native interoperability of Matrix.'
				}
			/>
			<Basic
				title={'End-to-end encrypted'}
				description={
					'Unlike email and traditional collaboration systems, Element is end-to-end encrypted and yet still gives organizations oversight of its communications.'
				}
			/>
			<Basic
				title={'Open standard'}
				description={
					'Being built on an open standard, Element enables organizations to retain independence, avoid vendor lock-in and usher in the future of communication.'
				}
			/>
			<Basic
				title={'Flexible'}
				description={
					'The Element app is powerful, flexible and easy-to-use; employees actually want to use it to collaborate productively in real time.'
				}
			/>
		</div>
	)
}

export default Basics
