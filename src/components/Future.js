import React from "react";  
import { futuredata } from "../utlis/data";

const Future = () => {

  return (
    <div className="bg-green-100">
      <div className="py-20 mt-20 text-center">
        <button className="px-4 py-3 font-bold rounded-full border border-black">
          Save the Future
        </button>
        <h1 className="text-4xl font-bold m-3 text-green-800">
          Protect Nature for Future <br /> Generations
        </h1>
        <p className="text-md text-green-700">
          Malesuada fames ac turpis egestas maecenas pharetra convallis posuere.
          Gravida quis blandit <br /> turpis cursus. Quam nulla porttitor massa
          id neque aliquam vestibulum morbi.
        </p>

        <div className="max-w-[75%] m-auto">
          <div className="row m-0 mt-5">
            {futuredata.map((data) => {
              return (
                <div className="col-md-3 pl-[140px]">
                  <div className="bg-green-500 p-2 w-28 rounded-full">
                    <img src={data.src} className="rounded-full" />
                  </div>
                  <div className="my-2">
                    <h2 className="font-bold text-xl">{data.name}</h2>
                    <p className="my-3 text-sm">{data.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
