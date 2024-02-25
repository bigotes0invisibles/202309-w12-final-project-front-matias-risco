import LoginUserPageStyled from "./LoginUserPageStyled";
import UserLogin from "../../components/UserLogin/UserLogin";

const LoginUserPage = (): React.ReactElement => {
  return (
    <LoginUserPageStyled>
      <h1>Login</h1>
      <UserLogin />
    </LoginUserPageStyled>
  );
};

export default LoginUserPage;
