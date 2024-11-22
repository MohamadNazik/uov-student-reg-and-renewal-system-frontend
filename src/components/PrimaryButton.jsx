import React from "react";

function PrimaryButton({ hasIcon, iconSrc, text, onClick }) {
  return (
    <button
      className="gap-3 px-6 py-3 rounded-2xl text-white text-[20px] bg-[#391031] hover:bg-[#4a1340] flex items-center"
      onClick={onClick}
    >
      {hasIcon && <img src={iconSrc} alt="Icon" className="w-3" />}
      <span>{text}</span>
    </button>
  );
}

export default PrimaryButton;
