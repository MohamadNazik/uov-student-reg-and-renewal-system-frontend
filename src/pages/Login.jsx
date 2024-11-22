import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import downloadIcon from "../assets/icons/download_icon.png";

function Login() {
  return (
    <div>
      <PrimaryButton hasIcon={true} text="Login" iconSrc={downloadIcon} />
    </div>
  );
}

export default Login;
