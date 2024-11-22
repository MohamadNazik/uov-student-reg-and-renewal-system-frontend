import React from 'react';

function PrimaryButton({ hasIcon, iconSrc, text, onClick }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        className="px-6 py-3 rounded-lg text-white bg-[#391031] hover:bg-[#4a1340] flex items-center space-x-2"
        onClick={onClick}
      >
        {/* Conditionally render icon if hasIcon is true */}
        {hasIcon && (
          <img src={iconSrc} alt="Icon" className="w-6 h-6" />
        )}
        <span>{text}</span>
      </button>
    </div>
  );
}

export default PrimaryButton;

