import React from "react";
import { Link } from "react-router-dom";

const NgoCard = ({ info }) => {
  return (
    <>
      {info.map((info) => {
        return (
          <div className="pt-1 pb-4 container shadow-md w-5/6 my-2 hover:shadow-xl">
        <h1 className="text-xl md:text-3xl mt-6 m-7 text-red-600 underline">
          {info?.name}
        </h1>
        <div className="row">
          <div className="col-md-4 items-center">
            <img src={info?.imageSrc} />
          </div>
          <div className="col-md-8">
            <h1 className="my-2 font-semibold text-red-600">Founder Name: <span className="underline">{info?.founderName}</span></h1>
            <p className="font-serif">
              {info?.detail}
            </p>
            <Link to={info?.url}>
              <button type="button" className="btn btn-outline-dark mt-3">
                Read More
              </button>
              </Link>
            <p className="mt-5 text-red-600">
              Rating: {info?.rateInStar} ❤
            </p>
          </div>
        </div>
      </div>
        );
      })};
    </>
  );
};

export default NgoCard;
