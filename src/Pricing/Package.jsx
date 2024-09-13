import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function Package({ title, price, points, headers, isFree }) {
	return (
    <div className="relative bg-light-purp rounded-[40px] sm:w-[433px] w-80  ">
      <div className="font-oxanium pt-10 px-12 max-xl:px-6  text-center">
        <h3 className="text-[36px] leading-[42px">{title}</h3>
        <h4 className="text-2xl leading-6 mt-4 text-[#E9E8F4]">{price} </h4>
      </div>
      <div
        className="mt-10 bg-[#E9E8F4] sm:w-[445px] w-80
			 flex flex-col px-12 max-xl:px-6 py-10 rounded-t-[75px] rounded-b-[40px] gap-10"
      >
        <div>
          {!!headers?.length > 0 && (
            <div>
              {headers.map((item, index) => (
                <h3
                  key={index}
                  className=" font-oxanium text-[32px] leading-[42px] text-mid-purp mb-4"
                >
                  {item}
                </h3>
              ))}
            </div>
          )}

          <ul className="flex flex-col gap-4 ">
            {points.map((item, index) => (
              <li key={index} className="flex gap-4">
                <img src="static/Pricing/check_24px.svg" alt="" />
                <p className=" font-sofiaSans font-medium text-2xl leading-6 text-mid-purp">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <Button>
          {isFree ? (
            <a
              href="https://github.com/SAMA-Communications#getting-started"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started for free
            </a>
          ) : (
            <Link to="../contacts"> Contact us </Link>
          )}
        </Button>
      </div>
    </div>
  );
}

export default Package
