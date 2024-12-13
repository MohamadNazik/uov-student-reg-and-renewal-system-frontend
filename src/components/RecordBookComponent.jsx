import React from "react";
import student_img from "../assets/DP.jpg";
import holder_signature from "../assets/signature.png";
import uni_logo from "../assets/uov_logo.png";

function RecordBookComponent() {
  return (
    <div className="flex flex-col gap-5 xl:flex-row xl:gap-14">
      {/* Front view */}
      <div className="w-[250px] sm:w-[500px] bg-[#E13923] h-[350px] sm:h-[650px] flex justify-center items-center overflow-hidden relative">
        <div className="w-[190px] sm:w-[410px] bg-[#E13923] h-[290px] sm:h-[560px] border-2  border-customBlue flex flex-col justify-start items-center overflow-hidden relative">
          <img src={uni_logo} alt="University Logo" className="w-[75px] sm:w-[120px] h-auto mt-4 sm:mt-8" />
          <h3 className="text-customBlue text-[15px] sm:text-[32px] font-inter font-bold mt-5 sm:mt-10 leading-tight "
            style={{
              textShadow: `
               1px 1px 0 white, 
                -1px -1px 0 white, 
                -1px 1px 0 white, 
                1px -1px 0 white,
                1px 0 0 white, 
                0 1px 0 white, 
                -1px 0 0 white, 
                0 -1px 0 white
                
              `,
            }}>University of Vavuniya</h3>
          <h3 className="text-customBlue text-[15px] sm:text-[32px]  font-inter font-bold leading-tight" style={{
            textShadow: `
                1px 1px 0 white, 
                -1px -1px 0 white, 
                -1px 1px 0 white, 
                1px -1px 0 white,
                1px 0 0 white, 
                0 1px 0 white, 
                -1px 0 0 white, 
                0 -1px 0 white
                
              `,
          }}>Sri Lanka</h3>
          <h3 className="text-customBlue text-[20px] sm:text-[38px] text-center  font-inter font-bold uppercase mt-6 sm:mt-8 leading-tight" style={{
            textShadow: `
                1px 1px 0 white, 
                -1px -1px 0 white, 
                -1px 1px 0 white, 
                1px -1px 0 white,
                1px 0 0 white, 
                0 1px 0 white, 
                -1px 0 0 white, 
                0 -1px 0 white
              `,
          }}>Student's Record Book</h3>
          <h3 className="text-customBlue text-[10px] sm:text-[22px] text-center  font-inter font-bold uppercase mt-11 sm:mt-24 sm:pt-2 leading-tight " style={{
            textShadow: `
                1px 1px 0 white, 
                -1px -1px 0 white, 
                -1px 1px 0 white, 
                1px -1px 0 white,
                1px 0 0 white, 
                0 1px 0 white, 
                -1px 0 0 white, 
                0 -1px 0 white
              `,
          }}>Facalty Of Applied Science</h3>
        </div>
      </div>


      {/* Back view */}
      <div className="w-[250px] sm:w-[500px]  bg-white h-[350px] sm:h-[650px] flex justify-center items-center overflow-hidden relative">
        <div className="w-[190px] sm:w-[410px] bg-white h-[290px] sm:h-[560px] border-2  border-black  flex justify-center items-center overflow-hidden relative"></div>
      </div>


    </div>
  );
}

export default RecordBookComponent;
