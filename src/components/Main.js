import React from "react";
import { BANNER_IMG } from "../utlis/contraits";
import Future from "./Future";
import NgoList from "./NgoList";
import { ngoData } from "../utlis/data";

const Main = () => {
  return (
    <>
      <div>
        <div className="my-1">
          <img
            src={BANNER_IMG}
            className="w-full absolute img-fluid rounded-br-full"
          />
          <div>
            <h1 className="relative text-6xl font-bold pt-36 pb-3 px-36 leading-tight">
              Go Charity Today, <br />
              Save The World <br />
              <span className="text-green-300">Tomorrow...</span>
            </h1>
            <p className="relative px-36 text-white text-xl">
              Diam sit amet nisl suscipit. Elementum curabitur vitae nunc sed{" "}
              <br /> velit dignissim sodales ut eu. Faucibus ornare suspendisse
              sed <br /> nisi lacus sed. Neque viverra justo nec ultrices dui
              sapien.
            </p>
          </div>
        </div>
      </div>
      <Future />
      <NgoList ngoData={ngoData} />
    </>
  );
};

export default Main;
