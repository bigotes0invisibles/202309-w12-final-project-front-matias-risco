import React from "react";
import RegisterUserPageStyled from "./RegisterUserPageStyled";
import UserRegister from "../../components/UserRegister/UserRegister";

const RegisterUserPage = (): React.ReactElement => {
  return (
    <RegisterUserPageStyled>
      <h1>Register</h1>
      <UserRegister />
    </RegisterUserPageStyled>
  );
};

export default RegisterUserPage;
