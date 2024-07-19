import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
export default function Example() {
	return (
		<div>
			<Menu>
				{({ open }) => (
					<>
						<MenuButton
							className="z-40 bg-bg-color/70  rounded-lg py-1 px-1 
                 data-[hover]:bg-bg-color data-[open]:bg-bg-color/40  "
						>
							{console.log(open)}
							<RxHamburgerMenu size={40} />
						</MenuButton>

						{open && (
							<MenuItems
								modal={false}
								transition
								anchor="bottom start"
								className="z-30 w-52 origin-top-right rounded-xl border  border-white/5 bg-white text-black p-1 text-sm  transition duration-100 ease-out [--anchor-gap:10px]
                     focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
							>
								<MenuItem>
									<Link
										to="/docs"
										className="flex w-full text-left rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
									>
										Docs
									</Link>
								</MenuItem>
								<MenuItem>
									<Link
										to="pricing"
										className="flex w-full text-left rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
									>
										Pricing
									</Link>
								</MenuItem>

								<MenuItem>
									<Link
										to="about-us"
										className="flex w-full text-left rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
									>
										About Us
									</Link>
								</MenuItem>
								<MenuItem>
									<Link
										to="contacts"
										className="flex w-full text-left rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
									>
										Contact Us
									</Link>
								</MenuItem>
								<MenuItem>
									<Link
										to="about-us"
										className="flex w-full text-left rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
									>
										Github
									</Link>
								</MenuItem>
							</MenuItems>
						)}
					</>
				)}
			</Menu>
		</div>
	)
}
