import React from "react";

function PrimaryButton({ iconSrc, text, onClick }) {
  return (
    <button
      className="gap-2 px-[15px] sm:px-[22px] w-fit py-[8px] sm:py-[10px] rounded-2xl text-white text-[9px] sm:text-[13px] font-semibold bg-[#391031] hover:bg-[#4a1340] flex items-center justify-center"
      onClick={onClick}
    >
      {iconSrc && (
        <img src={iconSrc} alt="Icon" className="w-[7px] sm:w-[13px]" />
      )}
      <span>{text}</span>
    </button>
  );
}

export default PrimaryButton;
