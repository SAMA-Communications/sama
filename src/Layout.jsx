import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Example from "./Layout/gamburger";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Content() {
  return (
    <div className="relative">
      <header className="h-24  px-10 py-6 bg-mid-purp z-20 relative">
        <div className="flex gap-[10px] md:justify-between xs:justify-around justify-between items-center ">
          <Link to="/">
            <img src="static/Layout/header-sama.svg" alt="" />
          </Link>
          <div className="max-lg:hidden">
            <div className=" flex gap-14 text-xl font-oxanium">
              <Link to="/" className="h-6">
                Home
              </Link>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Docs
              </a>
              <Link to="pricing"> Pricing</Link>
              <Link to="about-us"> About Us</Link>
            </div>
          </div>
          <div className="lg:hidden order-first ">
            <Example />
          </div>

          <div className="flex gap-4 items-center max-md:hidden">
            <a
              href="https://github.com/SAMA-Communications"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="static/Layout/github-icon-purp.svg" alt="" />
            </a>

            <Link
              to="contacts"
              className=" bg-transparent h-10 rounded-[40px] px-6 py-[10px] border-2 border-light-purp flex gap-1 items-center text-light-purp font-sofiaSans font-semibold"
            >
              <img src="static/Layout/phone_iphone_24px.svg" alt="" />
              Contact us
            </Link>
          </div>
        </div>
      </header>
      <div className=" bg-bg-color relative px-10 max-xl:px-6 pt-[72px] max-xl:pt-[42px]">
        <Outlet />
      </div>

      <footer className="bg-mid-purp md:h-[402px] flex flex-col  pl-10 z-20 relative ">
        <div className="flex max-md:flex-col mt-10 lg:gap-36 md:gap-24 gap-12 max-md:items-center">
          <div>
            <Link to="/">
              <img src="static/Layout/footer-sama.svg" alt="" />
            </Link>
          </div>
          <div className="w-full flex lg:gap-36 md:gap-24 max-md:justify-around max-sm:justify-between pr-10">
            <div className="flex flex-col gap-3">
              <p className="font-oxanium">Product</p>
              <div className="flex flex-col gap-2 text-color-default font-sofiaSans ">
                <Link to="#">Docs</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/about-us">About us</Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className=" font-oxanium">Contact us</p>
              <div className="flex flex-col gap-2 text-color-default font-sofiaSans">
                <Link to="/contacts">Get in touch</Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-8 mr-10  h-[1px] bg-gradient-to-r from-[#FD82D2] to-[#5F25BD]" />
        <div className="my-[26px] flex justify-between mr-10">
          <p className=" font-sofiaSans max-md:text-sm">
            Copyright &copy; 2022–2024 SAMA
          </p>
          <div className="flex gap-6 items-center ">
            <a
              href="https://github.com/SAMA-Communications"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="static/Layout/github-icon-white.svg" alt="" />
            </a>
            <a
              href="https://medium.com/sama-communications"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="static/Layout/Medium.svg" height="24px" alt="" />
            </a>
            <a
              href="https://discord.gg/bHSm9a7DpC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="static/Layout/discord-white.svg" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Layout() {
  return (
    <>
      <Content />
      <ScrollToTop />
    </>
  );
}
