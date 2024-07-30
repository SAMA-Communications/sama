import React from 'react'
import Basic from './Basic'
function Basics() {
	return (
		<div className="flex flex-col gap-8 lg:w-[876px] mt-20 font-oxanium">
			<Basic
				title={'Simple'}
				description={
					'The solutions that designed to be user-friendly and easy to integrate, ensuring a smooth setup process without the need for extensive technical knowledge.'
				}
			/>
			<Basic
				title={'Advanced'}
				description={
					'Leveraging the latest advancements in technology, we provide powerful features that enhance the chat experience, including real-time messaging, multimedia support, and more.'
				}
			/>
			<Basic
				title={'Secure'}
				description={
					'Security is at the core of our development process. We implement robust encryption protocols and stringent security measures to protect your data and ensure privacy.'
				}
			/>
			<Basic
				title={'Scalable'}
				description={
					'Whether you are a small startup or a large enterprise, our solution can handle your growing communication needs, ensuring optimal performance as your user base expands.'
				}
			/>
		</div>
	)
}

export default Basics
