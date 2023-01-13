import React from "react";

const Card = () => {
  return (
    <div className="card w-[560px] bg-base-100 text-black">
      <div className="card-body items-center text-center">
        <div className="grid grid-cols-3 gap-2 items-center py-3">
          <div className="bg-primary h-7 p-1 rounded-full -rotate-[30deg]"></div>
          <div className="bg-primary h-9 p-1 rounded-full -rotate-[30deg]"></div>
          <div className="bg-primary h-5 p-1 rounded-full -rotate-[30deg]"></div>
        </div>
        <h2 className="card-title text-3xl font-bold">
          It is delight to have you <br /> onboard
        </h2>
        <p>
          Help us know you better.
          <br />
          (This is how we optimize Wobot as per your business needs)
        </p>
        <form className="form-control w-full">
          <label className="label">
            <span className="label-text">Company name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            placeholder="e.g. Example inc"
          />
        </form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Industry</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      <div className="card-actions justify-center p-10">
        <button className="btn btn-primary btn-block">Get started</button>
      </div>
    </div>
  );
};

export default Card;
