import React, { useState } from "react";

const industries = [
  "real estates",
  "automobile",
  "engineering",
  "it",
  "aerospace",
  "farming",
  "furniture",
  "re rolling",
];
const companySizes = ["1-20", "21-50", "51-200", "201-500", "500+"];
const Card = () => {
  const [selected, setSelected] = useState(2);
  const handleSelect = (idx) => {
    setSelected(idx);
    console.log(selected);
  };
  return (
    <div className="card w-2/3 mx-auto lg:w-[560px] bg-base-100 text-black shadow-lg">
      <div className="card-body items-center text-center">
        <div className="grid grid-cols-3 gap-2 items-center py-3">
          <div className="bg-newBlue h-7 p-1 rounded-full -rotate-[22deg]"></div>
          <div className="bg-newBlue h-9 p-1 rounded-full -rotate-[22deg]"></div>
          <div className="bg-newBlue h-5 p-1 rounded-full -rotate-[22deg]"></div>
        </div>
        <h2 className="card-title text-3xl font-bold">
          It is delight to have you <br /> onboard
        </h2>
        <p>
          Help us know you better.
          <br />
          (This is how we optimize Wobot as per your business needs)
        </p>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Company name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            placeholder="e.g. Example inc"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Industry</span>
          </label>
          <select className="select select-bordered w-full">
            <option disabled selected>
              Select
            </option>
            {industries.map((industry, idx) => (
              <option className="capitalize" key={idx}>
                {industry}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control mt-6">
          <p className="text-left">Company size</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 items-center gap-2 mt-2">
            {companySizes.map((companySize, idx) => (
              <p
                key={idx}
                className={` ${
                  (selected === idx &&
                    " btn btn-sm btn-ghost bg-newBlue text-white hover:text-black hover:bg-light") ||
                  "btn btn-sm btn-ghost bg-light"
                }`}
                onClick={() => handleSelect(idx)}
              >
                {companySize}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="card-actions justify-center p-10">
        <button className="btn btn-primary border-newBlue bg-newBlue btn-block">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Card;
