import React from "react";
import NgoCard from "./NgoCard";

const NgoList = ({ ngoData }) => {
  return (
    <>
      <div className="my-4">
        <h1 className="text-center text-3xl font-bold">
          NGO List you should <span className="text-green-400">Donate.</span>
        </h1>
        <div className="flex justify-center my-3">
          <input
            type="text"
            placeholder="Search for favourite NGO"
            className="border border-gray-500 text-black px-[20%] py-2 rounded-full"
          />
        </div>
          <NgoCard info={ngoData} />
      </div>
    </>
  );
};

export default NgoList;
