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
        <div className="w-[190px] sm:w-[410px] bg-white h-[290px] sm:h-[560px] border-2  border-black   flex flex-col justify-start items-center overflow-hidden relative">
          <div class="w-[100px] h-[25px] sm:w-[200px] sm:h-[40px] sm:text-[20px] border  border-black text-[12px] ml-auto mr-[20px] mt-2">
            <p class="text-center mt-[5px] font-bold">
              Registration No:
            </p>
          </div>
          <div class="w-[100px] h-[25px] sm:w-[200px] sm:h-[40px] border border-black text-[12px] sm:text-[20px] ml-auto mr-[20px]">
            <p class="text-center mt-[4px]  font-bold">
              2020/CT/000
            </p>
          </div>
          <div class="text-left  text-[12px] sm:text-[20px] mr-5 mt-2 sm:ml-[3px] sm:mt-10 sm:space-y-2">
            <h4>
              Name With Initials
              <span class="inline mx-auto ml-12 sm:ml-[73px]">:</span>
              <span class="font-bold sm:ml-[3px]">J. Doe</span>
            </h4>
            <h4>
              Name Donated By Initials
              <span class="inline mx-auto ml-3 sm:ml-[10px]">:</span>
              <span class="font-bold sm:ml-[3px]">John Doe</span>
            </h4>
            <h4>
              National Identity Card No
              <span class="inline mx-auto  ml-3 sm:ml-[8px] ">:</span>
              <span class="font-bold sm:ml-[3px]">123456789012</span>
            </h4>
            <h4>
              Date of Birth
              <span class="inline mx-auto  ml-[80px] sm:ml-[127px] ">:</span>
              <span class="font-bold sm:ml-[3px]">01.01.2001</span>
            </h4>
          </div>

          <div className="flex justify-center items-center mt-1 sm:mt-8">
            <img
              src={student_img}
              alt="Student Image"
              className="w-[50px] sm:w-[120px] h-auto"
            />
          </div>
          <div class="text-left text-[12px] sm:text-[20px] mr-5 mt-2 sm:mrl-20 sm:mt-10">
              <h4>Signature of the student:</h4>
              <img src={holder_signature} alt="signature" class="w-[50px] sm:w-[50px] h-auto" />
          </div>
        </div>
      </div>


    </div>
  );
}

export default RecordBookComponent;
