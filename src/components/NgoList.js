import React, { useEffect, useState } from "react";
import NgoCard from "./NgoCard";
import { Link } from "react-router-dom";
import { headerData } from "../utlis/data";

const NgoList = ({ ngoData }) => {
  const [ngo1, setNgo1] = useState([]);
  const [searchNgo, setSearchNgo] = useState("");

  useEffect(() => {
    setNgo1(ngoData);
  });

  const filterNgo = () => {
    const filteredNgo = ngo1.filter((ngo1) => ngo1.rateInStar < 4.5);
    setNgo1(filteredNgo);
  };

  const handleSearchNgo = () => {
    const filteredNgo = ngo1.filter((ngo) =>
      ngo.name.toLowerCase().includes(searchNgo.toLowerCase())
    );
    setNgo1(filteredNgo);
  };

  return (
    <>
      <div className="py-4 bg-gray-100">
        <h1 className="text-center text-3xl font-bold">
          NGO List you should <span className="text-green-400">Donate.</span>
        </h1>
        <div className="flex justify-center my-3">
          <input
            type="text"
            placeholder="Search for favourite NGO"
            className="border border-gray-500 text-black w-[20%] px-3 rounded-tl-full rounded-bl-full"
            value={searchNgo}
            onChange={(e) => setSearchNgo(e.target.value)}
          />
          <button
            className="border border-black text-white bg-green-900 px-3 rounded-tr-full rounded-br-full"
            onClick={() => handleSearchNgo()}
          >
            Search
          </button>
          <button
            className="relative mx-10 px-5 py-3 font-bold rounded-full text-white bg-green-900 transition-all duration-300"
            onClick={() => filterNgo()}
          >
            Top Rated NGOS
          </button>
        </div>

        <NgoCard info={ngo1} />
        <div className="text-center">
          <ul className="flex justify-center gap-4">
            <Link to={headerData[0].path}>
              <li className="px-3 py-2 border-2 border-blue-400 rounded-md">
                1
              </li>
            </Link>
            <Link to={headerData[5].path}>
              <li className="px-3 py-2 border-2 border-blue-400 rounded-md">
                2
              </li>
            </Link>
            <Link to={headerData[6].path}>
              <li className="px-3 py-2 border-2 border-blue-400 rounded-md">
                3
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NgoList;
