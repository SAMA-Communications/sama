import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

function Release() {
	return (
    <>
      <img
        src="/static/Homepage/last-bg.png"
        className="absolute  main:top-[1851px] lg:top-[2200px]  max-lg:hidden main:left-0 xl:left-[-100px] left-[-250px]"
        width="700px"
        alt="Background image"
      />
      <div className="xl:mt-48 flex z-10 relative xl:justify-around lg:justify-end  ">
        <div className=" max-[2000px]:basis-1/2 max-lg:hidden">
          <img
            src="/static/Homepage/iphone.png"
            className="absolute main:left-[379px] xl:left-[200px] left-[100px]"
            width="200px"
            alt="iPhone image with SAMA app"
          />
          <img
            src="/static/Homepage/iphone.png"
            className="absolute top-[204px] main:left-[255px] xl:left-[100px] left-[0px]"
            width="200px"
            alt="iPhone image with SAMA app"
          />
        </div>
        <div className=" w-[648px] mt-[108px] flex flex-col gap-14 max-lg:ml-16 max-md:ml-0">
          <div className=" flex flex-col gap-8  ">
            <h2 className=" font-oxanium  sm:text-4xl text-3xl leading-[50px]">
              Release SAMA under your brand
            </h2>
            <p className="  font-sofiaSans text-xl text-color-default">
              Interested in customizing and releasing the SAMA server and client
              under your unique brand? Contact us for comprehensive details and
              to discuss the specific functionalities you need. Our team is
              ready to help you tailor the SAMA server and client to align with
              your brand's identity and technical requirements.
            </p>
          </div>
          <Link to="contacts" className="max-xl:self-center">
            <Button
              className={" max-lg:text-xl max-lg:px-6 max-lg:py-2 max-md:px-16"}
            >
              Contact us
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Release
