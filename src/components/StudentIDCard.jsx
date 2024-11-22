import React from "react";
import uni_logo from "../assets/uov_logo.png";
import student_img from "../assets/DP.jpg";

function StudentIDCard() {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[300px] sm:w-[500px] bg-white h-[175px] sm:h-[280px] rounded-xl overflow-hidden">
        <div className="w-[300px] sm:w-[500px] bg-[#F2BA1E] h-[70px] sm:h-[120px] rounded-tr-xl rounded-tl-xl flex justify-between gap-4 px-6 sm:px-9 items-center">
          <img
            src={uni_logo}
            alt="university_logo"
            className="w-12 h-12 sm:w-20 sm:h-20"
          />
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-[12px] sm:text-[20px] font-bold text-black uppercase tracking-wider">
              faculty of applied science
            </h1>
            <h2 className="text-[10px] sm:text-[15px] font-normal text-black tracking-wider">
              University of Vavuniya, Sri Lanka
            </h2>
            <h2 className="text-[9px] sm:text-[14px] font-bold text-black uppercase tracking-wide">
              student's identity card
            </h2>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4 px-6 py-2">
          <img
            src={student_img}
            alt="student_image"
            className="w-16 sm:w-[105px] border-[1px] border-black"
          />
          <div className="w-48 flex flex-col justify-between">
            <div className="flex gap-2">
              <div className="flex gap-[57px]">
                <h3 className="text-[9px] font-normal">Name</h3>
                <h3 className="text-[9px] font-medium">:</h3>
              </div>
              <h3 className="text-[9px] font-medium">John Doe</h3>
            </div>
            <div className="flex  gap-2">
              <div className="flex gap-[23px]">
                <h3 className="text-[9px] font-normal">Enrollment No</h3>
                <h3 className="text-[9px] font-medium">:</h3>
              </div>
              <h3 className="text-[9px] font-medium">2020/ABC/000</h3>
            </div>
            <div className="flex  gap-2">
              <div className="flex gap-[47px]">
                <h3 className="text-[9px] font-normal">N.I.C No</h3>
                <h3 className="text-[9px] font-medium">:</h3>
              </div>
              <h3 className="text-[9px] font-medium">123456789012</h3>
            </div>
            <div className="flex  gap-2">
              <div className="flex gap-[5px]">
                <h3 className="text-[9px] font-normal">Date of Enrollment</h3>
                <h3 className="text-[9px] font-medium">:</h3>
              </div>
              <h3 className="text-[9px] font-medium">01.01.2024</h3>
            </div>
          </div>
        </div>
        <div className="w-[300px] bg-[#F2BA1E] h-[12px] rounded-br-xl rounded-bl-xl"></div>
      </div>
      <div className="w-[300px] bg-white h-[185px] rounded-2xl"></div>
    </div>
  );
}

export default StudentIDCard;
