import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Layout() {
	return (
		<div className="w-[1440px] relative">
			<header className="h-24  px-10 py-6 bg-mid-purp z-20 relative">
				<div className="flex gap-[10px] justify-between items-center">
					<div>
						<img src="static/Layout/header-sama.svg" alt="" />
					</div>
					<div className=" flex gap-14 text-xl font-oxanium">
						<Link to="/" className="h-6">
							Home
						</Link>
						<Link to="/docs"> Docs</Link>
						<Link to="/pricing"> Pricing</Link>
						<Link to="/about-us"> About Us</Link>
					</div>
					<div className="flex gap-4 items-center">
						<img src="static/Layout/github-icon-purp.svg" alt="" />
						<button className=" bg-transparent h-10 rounded-[40px] px-6 py-[10px] border-2 border-light-purp flex gap-1 items-center text-light-purp font-sofiaSans font-semibold">
							<img src="static/Layout/phone_iphone_24px.svg" alt="" />
							Contact us
						</button>
					</div>
				</div>
			</header>
			<div className=" bg-bg-color relative px-10 pt-[72px]">
				<Outlet />
			</div>

			<footer className="bg-mid-purp h-[402px] flex flex-col pl-10 z-20 relative">
				<div className="flex mt-10 gap-36">
					<div>
						<img src="static/Layout/footer-sama.svg" alt="" />
					</div>
					<div className="flex flex-col gap-3">
						<p className="font-oxanium">Content</p>
						<div className="flex flex-col gap-2 text-color-default font-sofiaSans ">
							<Link to="/features">Features</Link>
							<Link to="/docs">Docs</Link>
							<Link to="/pricing">Pricing</Link>
							<Link to="/about-us">About us</Link>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<Link to="contacts" className=" font-oxanium">
							Contacts
						</Link>
						<div className="flex flex-col gap-2 text-color-default font-sofiaSans">
							<Link to="/">Phone number</Link>
							<Link to="/">Email address</Link>
						</div>
					</div>
				</div>
				<div className=" mt-8 mr-10  h-[1px] bg-gradient-to-r from-[#FD82D2] to-[#5F25BD]" />
				<div className="flex gap-6 mt-[26px]">
					<img src="static/Layout/github-icon-white.svg" alt="" />
					<img src="static/Layout/M-Vector.svg" alt="" />
				</div>
			</footer>
		</div>
	)
}
