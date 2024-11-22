import React, { useState } from "react";

function PrimaryInputField() {
  const [isFocused, setIsFocused] = useState(false); // Renamed variable to be more clear

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto">
      <div className="relative mb-6">
        <input
          id="registration"
          type="text"
          placeholder=" "
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="peer w-full rounded-lg px-3 py-2 text-sm outline outline-1 focus:outline focus:outline-2 transition-all duration-100"
        />
        <label
          htmlFor="registration"
          className={` bg-white px-2 absolute left-3 text-sm transition-all duration-300 transform peer-focus:top-[-0.8rem] peer-focus:text-black top-2 ${
            isFocused ? "-top-4 text-black" : "text-gray-500"
          }`}
        >
          Registration Number
        </label>
      </div>
    </div>
  );
}

export default PrimaryInputField;
