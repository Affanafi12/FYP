import React from "react";
import Future from './Future';

const About = () => {
  return (
    <>
    <div className="py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700">The Story Behind</h1>
        <button className="border border-black text-center my-3 px-4 py-2 rounded-full font-bold text-xl">
          About Us
        </button>
        <h1 className="text-5xl text-green-700 font-bold">
          Join Us Charity Bridge in The Fight for Charity.
        </h1>
        <p className="py-2">
          Lobortis feugiat vivamus at augue eget arcu. Sed sed risus pretium 
          quam vulputate dignissim suspendisse in. <br /> Risus in hendrerit gravida 
          rutrum. Ultrices gravida dictum fusce ut placerat orci nulla. Facilisi 
          morbi tempus iaculis urna id volutpat lacus. <br /> Amet dictum sit amet 
          justo donec enim diam vulputate. Eget dolor morbi non arcu risus quis 
          varius. Aliquet bibendum enim facilisis gravida <br /> neque convallis a cras 
          semper. Amet porttitor eget dolor morbi non arcu risus.
        </p>
      </div>
    </div>

    <Future />

    <div className="bg-green-800"></div>
    </>
  );
};

export default About;
