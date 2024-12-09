import React from "react";

import PrimaryButton from "../components/PrimaryButton";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col gap-3 sm:gap-5 justify-center items-center">
      <div className="bg-white p-8 sm:p-14 rounded-3xl flex flex-col items-center gap-5 sm:gap-8 shadow-2xl">
        <PrimaryButton text="PROCEED TO REGISTRATION" />
        <Link to="/login">
          <PrimaryButton text="LOGIN TO YOUR ACCOUNT" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
