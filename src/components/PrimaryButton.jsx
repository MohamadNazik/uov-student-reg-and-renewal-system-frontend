import React from "react";

function PrimaryButton({ hasIcon, iconSrc, text, onClick }) {
  return (
    <button
      className="gap-3 px-[20px] py-[5px] rounded-2xl text-white text-[18px] font-semibold bg-[#391031] hover:bg-[#4a1340] flex items-center"
      onClick={onClick}
    >
      {hasIcon && <img src={iconSrc} alt="Icon" className="w-[10px]" />}
      <span>{text}</span>
    </button>
  );
}

export default PrimaryButton;
