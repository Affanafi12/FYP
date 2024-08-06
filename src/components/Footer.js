import React from "react";
import { headerData } from "../utlis/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="py-[5rem] px-5">
          <div className="row m-0">
            <div className="col-md-4 text-center px-3">
              <h1 className="text-white font-bold text-4xl">Carity Brigde</h1>
              <p className="text-white py-3">
                Orci sagittis eu volutpat odio facilisis  <br />mauris sit amet
                massa. Blandit libero volutpat  <br />sed cras ornare arcu dui.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h1 className="text-white text-xl font-bold">UseFul Links</h1>
              {headerData.map((d) => (
                <Link to={d.path}>
                  <p key={d.id} className="text-white my-2">
                    {d.name}
                  </p>
                </Link>
              ))}
            </div>
            <div className="col-md-4 text-center text-white">
              <h1 className="text-xl font-bold">VOLUNTEER</h1>
              <p className="py-2">
                We have the beat volunteer. <br /> with the extraordinary experiences.
              </p>
              <a href="#"><p>👉 Open Volunteer</p></a>
              <h1 className="text-xl font-bold py-2">DONATION</h1>
              <a href="#"><p>👉 Donation</p></a>
            </div>
          </div>
        </div>
        <div className="bg-green-600 text-center">
          <p className="text-white font-bold py-4 font-serif">Copyright © 2024 Charity Brigde. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
