import React from 'react';
import { headerData } from '../utlis/data';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black'>
      <div>
        <div className='row m-0'>
          <div className='col-md-3'>
            <h1 className='text-white font-bold text-4xl'>Carity Brigde</h1>
            <p className='text-white'>Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Blandit libero volutpat sed cras ornare arcu dui.</p>
          </div>
          <div className='col-md-3'>
            <h1 className='text-white text-xl font-bold'>UseFul Links</h1>
            {
              headerData.map((d) => (
                <Link to={d.path}><p key={d.id} className='text-white my-2'>{d.name}</p></Link>
              ))
            }
          </div>
          <div className='col-md-3'></div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
