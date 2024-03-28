import { Pagination } from "flowbite-react";
import React from "react";

// use rafce for export
// use rafc if not to be export

const Body = () => {
  return (
    <div className="body pt-[253px] flex-col text-center space-y-5">
      <h1 className="text-2xl  font-sans text-white font-bold"> Startup 3</h1>
      <h1 className="text-7xl leading-none font-sans font-bold text-white bg-grad">
        Forget About Code
      </h1>
      <div className="description text-white font-sans text-[22px]">
        <h1 className="">
          {" "}
          Startup Framework gives you complete freedom over your creative{" "}
        </h1>
        <h1 className="">
          process — you don’t have to think about any technical aspects. There
        </h1>
        <h1 className="">are no limits and absolutely no coding.</h1>
      </div>
      <button className="text-white bg-[#482BE7] h-[60px] w-[230px] text-[18px] rounded-full">
        Create an Account
      </button>
    </div>
  );
};

export default Body;
