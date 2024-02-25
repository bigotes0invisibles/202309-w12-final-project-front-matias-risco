import { useState } from "react";
import UserLoginStyled from "./UserLoginStyled";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const minWordLength = +(import.meta.env.MIN_LENGTH_WORD ?? 3);

interface UserLoginStructure {
  username: string;
  password: string;
}

const InitialUser: UserLoginStructure = {
  username: "",
  password: "",
};

const UserLogin = (): React.ReactElement => {
  const [newUser, setNewUser] = useState(InitialUser);
  const [buttonState, setButtonState] = useState(true);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewUser((newUser) => ({
      ...newUser,
      [event.target.id]: event.target.value,
    }));

    setButtonState(
      newUser.password.length < minWordLength ||
        newUser.username.length < minWordLength,
    );
  };

  return (
    <UserLoginStyled autoComplete="off">
      <h2>User Login</h2>

      <div className="user-form__input">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={newUser.username}
          onChange={onChange}
          className="input-text"
          required
        />
      </div>

      <div className="user-form__input">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={newUser.password}
          onChange={onChange}
          className="input-text"
          required
        />
      </div>
      <NavLink className="user-form__input" to="/register">
        i don't have a account
      </NavLink>
      <Button className="button--text" disable={buttonState}>
        Login
      </Button>
    </UserLoginStyled>
  );
};

export default UserLogin;
