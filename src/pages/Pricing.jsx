import React from 'react'
import Packages from '../Pricing/Packages'
import { useTitle } from "react-use";

function Pricing() {
  useTitle("Flexible pricing for open source chat | SAMA");
    
	return (
    <div>
      <img
        src="static/Pricing/bg-pricing.svg"
        className="absolute top-0 right-[0] max-main:hidden"
        alt=""
      />
      <div className="z-10 relative">
        <div className="flex flex-col items-center md:gap-8 gap-4">
          <h1 className=" font-oxanium xs:text-5xl leading-[42px] text-4xl">
            SAMA Pricing
          </h1>
          <div>
            <p className=" font-sofiaSans text-xl leading-[30px] text-color-default max-md:text-center">
              Explore our flexible pricing plans designed to suit your needs,
              whether you're an individual, a small business, or an enterprise.
            </p>
            <p className="font-sofiaSans text-xl leading-[30px] text-color-default xl:text-center max-md:text-center xl:mt-2 max-xl:mt-10">
              Choose the perfect plan for you and unlock the full potential of
              our services
            </p>
          </div>
        </div>
        <Packages />
      </div>
    </div>
  );
}

export default Pricing
