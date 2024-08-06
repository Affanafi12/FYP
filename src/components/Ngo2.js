import React from 'react';
import Main from './Main';
import { BANNER_IMG } from '../utlis/contraits';
import Future from './Future';
import NgoList from './NgoList';
import { ngoData2 } from '../utlis/data';

const Ngo2 = () => {
  return (
    <>
      <div>
      <div className="my-1">
        <img src={BANNER_IMG} className="w-full absolute img-fluid rounded-br-full" />
        <div>
            <h1 className="relative text-6xl font-bold pt-36 pb-3 px-36 leading-tight">
              Go Charit Today, <br />
              Save The World <br />{" "}
              <span className="text-green-300">Tomorrow...</span>
            </h1>
          <p className="relative px-36 text-white text-xl">Diam sit amet nisl suscipit. Elementum curabitur vitae nunc sed <br /> velit dignissim sodales ut eu. Faucibus ornare suspendisse sed <br /> nisi lacus sed. Neque viverra justo nec ultrices dui sapien.</p>
          <button className='relative mx-36 my-9 px-5 py-3 font-bold rounded-full text-white bg-green-900 transition-all duration-300 hover:bg-transparent hover:border hover: border-black'>Top Rated NGOS</button>
        </div>
      </div>
    </div>
    <Future />
    <NgoList ngoData={ngoData2}/>
    </>
  )
}

export default Ngo2;