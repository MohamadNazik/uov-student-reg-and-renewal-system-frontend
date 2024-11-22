import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import downloadIcon from "../assets/icons/download_icon.png";
import PrimaryInputField from "../components/PrimaryInputField";

function Login() {
  return (
    <div>
      <PrimaryInputField />
      <PrimaryButton hasIcon={true} text="Login" iconSrc={downloadIcon} />
    </div>
  );
}

export default Login;
