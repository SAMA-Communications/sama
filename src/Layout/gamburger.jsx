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
							<RxHamburgerMenu size={40} />
						</MenuButton>

						{open && (
							<MenuItems
								// modal={false}
								transition
								anchor="bottom start"
								className="z-30 w-52 origin-top-right rounded-xl border border-white/5 bg-white text-black p-1 text-base transition duration-100 ease-out [--anchor-gap:10px]
                     focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
							>
								<MenuItem>
									<Link
										to="/docs"
										className="flex rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
									>
										Docs
									</Link>
								</MenuItem>
								<div className="my-1 h-px bg-black/10" />
								<MenuItem>
									<Link
										to="pricing"
										className="flex rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
									>
										Pricing
									</Link>
								</MenuItem>
								<div className="my-1 h-px bg-black/10" />
								<MenuItem>
									<Link
										to="about-us"
										className="flex rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
									>
										About Us
									</Link>
								</MenuItem>
								<div className="my-1 h-px bg-black/10" />
								<MenuItem>
									<Link
										to="contacts"
										className="flex rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
									>
										Contact Us
									</Link>
								</MenuItem>
								<div className="my-1 h-px bg-black/10" />
								<MenuItem>
									<a
										href="https://github.com/SAMA-Communications"
										target="_blank"
										rel="noopener noreferrer"
										className="flex rounded-lg py-1.5 px-3 data-[focus]:bg-black/10"
									>
										Github
									</a>
								</MenuItem>
							</MenuItems>
						)}
					</>
				)}
			</Menu>
		</div>
	)
}
