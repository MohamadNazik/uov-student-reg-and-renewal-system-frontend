import React from 'react';
import logo from '../assets/uov_logo.png';

function Banner() {
  return (

    <div className="w-[700px] flex flex-col items-center">
        <img src={logo}  alt="University logo" className="w-36"/>
        <div>
            
            <h1 className="text-4xl font-bold text-black mb-2"> FACULTY OF APPLIED SCIENCE </h1>
            <h1 className="text-4xl font-bold text-black text-center"> UNIVERSITY OF VAVUNIYA </h1>
        </div>


    </div>
  );
}

export default Banner