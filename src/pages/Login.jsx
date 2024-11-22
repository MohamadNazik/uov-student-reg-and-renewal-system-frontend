import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryInputField from "../components/PrimaryInputField";

function Login() {
  return <div><PrimaryInputField/><PrimaryButton hasIcon={false} text="Login"/></div>;
}

export default Login;
