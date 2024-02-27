import { useCallback, useEffect, useState } from "react";
import UserLoginStyled from "./UserLoginStyled";
import Button from "../Button/Button";
import { NavLink, Navigate } from "react-router-dom";
import useUserApi from "../../hooks/useUserApi";
import { toast } from "react-toastify";
import { UserBaseStructure } from "../../store/feature/user/types";
import { useDispatch } from "react-redux";
import { loadUserActionCreator } from "../../store/feature/user/userSlice";

const minWordLength = +(import.meta.env.MIN_LENGTH_WORD ?? 3);

const InitialUser: UserBaseStructure = {
  name: "",
  password: "",
};

const UserLogin = (): React.ReactElement => {
  const { getTokenApi } = useUserApi();
  const [newUser, setNewUser] = useState(InitialUser);
  const [buttonState, setButtonState] = useState(true);
  const [isRedirec, setIsRedirec] = useState(false);
  const dispatch = useDispatch();

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewUser((newUser) => ({
      ...newUser,
      [event.target.id]: event.target.value,
    }));
  };

  useEffect(() => {
    setButtonState(
      newUser.password.length < minWordLength ||
        newUser.name.length < minWordLength,
    );
  }, [newUser]);

  const onSumbit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const token = await getTokenApi(newUser);
        dispatch(loadUserActionCreator({ name: newUser.name, token }));
        toast.success(`Succes in Login`);
        setIsRedirec(true);
      } catch (error) {
        toast.error(`Error in Login`);
      }
    },
    [dispatch, getTokenApi, newUser],
  );

  return (
    <UserLoginStyled autoComplete="off" onSubmit={onSumbit}>
      <h2>User Login</h2>

      <div className="user-form__input">
        <label htmlFor="name">Username: </label>
        <input
          type="text"
          id="name"
          value={newUser.name}
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
      {isRedirec && <Navigate to={`/home`} />}
    </UserLoginStyled>
  );
};

export default UserLogin;
