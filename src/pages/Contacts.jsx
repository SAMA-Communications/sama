import React from 'react'
import ContactForm from '../Contacts/ContactForm'
function Contacts() {
	return (
		<div className="min-h-[792px] pb-[72px]">
			<img
				src="static/Contacts/contacts-bg.svg"
				className="absolute right-0 bottom-0"
				alt=""
			/>

			<div className="flex z-10 relative justify-around items-center">
				<div className="flex flex-col gap-12">
					<h1 className=" font-oxanium text-5xl leading-[42px]">
						Get in touch with us
					</h1>
					<img src="static/Contacts/julia_smth_wants.svg" alt="" />
					<div>
						<h6 className=" font-sofiaSans text-base leading-[30px]">
							Follow us on
						</h6>
						<div className="flex gap-4 mt-2">
							<img src="static/Contacts/discord.svg" width={24} alt="" />
							<img src="static/Contacts/medium.svg" width={24} alt="" />
							<img src="static/Contacts/insos.svg" width={24} alt="" />
						</div>
					</div>
				</div>
				<ContactForm />
			</div>
		</div>
	)
}

export default Contacts
