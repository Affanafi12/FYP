import React from "react";
import { LOGO } from "../utlis/contraits";
import { Link } from "react-router-dom";
import { headerData } from "../utlis/data";

const Header = () => {

  return (
    <>
    <header>
      <div className="p-11 flex bg-green-800 text-white items-center">
        <div className="mx-6 mr-60 flex gap-2">
          <img src={LOGO} className="w-10" />
          <h1 className="text-3xl font-bold">Charity <span className="text-green-300">Bridge</span></h1>
        </div>
        <div className="">
          <ul className="flex">
            {headerData.map((d) => (
              <Link to={d.path}><li className="mx-3 p-2 cursor-pointer hover:bg-green-900 text-xl font-semibold">{d.name}</li></Link>
            ))}

            <button className="top-rated-button border-2 border-white px-3 py-2 rounded-full font-semibold mx-4">LogOut</button>
          </ul>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
