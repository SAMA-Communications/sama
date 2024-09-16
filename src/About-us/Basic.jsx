import React from 'react'

function Basic({ title, description }) {
	return (
    <div>
      <div className="flex gap-4">
        <img src="static/About/Rectangle.svg" alt="Rectangle icon" />
        <p className=" sm:text-[32px] text-xl leading-[42px]">{title}</p>
      </div>
      <p className=" sm:text-2xl text-lg leading-6 text-color-default mt-4">
        {description}
      </p>
    </div>
  );
}

export default Basic
