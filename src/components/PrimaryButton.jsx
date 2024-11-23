import React from "react";

function PrimaryButton({ iconSrc, text, onClick }) {
  return (
    <button
      className="gap-2 px-[15px] sm:px-[20px] pt-[2px] sm:pt-[5px] pb-[5px] sm:pb-[8px] rounded-2xl text-white text-[12px] sm:text-[18px] font-semibold bg-[#391031] hover:bg-[#4a1340] flex items-center"
      onClick={onClick}
    >
      {iconSrc && (
        <img src={iconSrc} alt="Icon" className="w-[7px] sm:w-[10px]" />
      )}
      <span>{text}</span>
    </button>
  );
}

export default PrimaryButton;
