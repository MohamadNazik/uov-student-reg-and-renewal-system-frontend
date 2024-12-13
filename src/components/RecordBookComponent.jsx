import React from "react";
import student_img from "../assets/DP.jpg";
import holder_signature from "../assets/signature.png";
import uni_logo from "../assets/uov_logo.png";

function RecordBookComponent() {
  return (
    <div className="flex flex-col gap-5 xl:flex-row xl:gap-14">
      {/* Front view */}
      <div className="w-[250px] sm:w-[500px] bg-[#E13923] h-[350px] sm:h-[600px] flex justify-center items-center overflow-hidden relative">
        <div className="w-[190px] sm:w-[410px] bg-[#E13923] h-[290px] sm:h-[510px] border-2  border-customBlue overflow-hidden relative"></div>
      </div>


      {/* Back view */}
      <div className="w-[250px] sm:w-[500px]  bg-white h-[350px] sm:h-[600px]  overflow-hidden relative"></div>


    </div>
  );
}

export default RecordBookComponent;
