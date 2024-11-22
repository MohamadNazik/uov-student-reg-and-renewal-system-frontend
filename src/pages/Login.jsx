import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import downloadIcon from "../assets/icons/download_icon.png";
import PrimaryInputField from "../components/PrimaryInputField";

function Login() {
  return (
    <div>
      <PrimaryButton hasIcon={true} text="Login" iconSrc={downloadIcon} />
      <PrimaryInputField />
    </div>
  );
}

export default Login;
