import { useCallback, useEffect, useState } from "react";
import { UserRegisterStructure } from "../../store/feature/user/types";
import Button from "../Button/Button";
import { Navigate } from "react-router-dom";
import UserRegisterStyled from "./UserRegisterStyled";
import { toast } from "react-toastify";
import useUserApi from "../../hooks/useUserApi";

const minWordLength = +(import.meta.env.MIN_LENGTH_WORD ?? 3);

const InitialRegistration: UserRegisterStructure = {
  name: "",
  password: "",
  passwordRepeat: "",
};

const UserRegister = (): React.ReactElement => {
  const { AddUserApi } = useUserApi();
  const [newUser, setNewUser] = useState(InitialRegistration);
  const [buttonState, setButtonState] = useState(true);
  const [isRedirec, setIsRedirec] = useState(false);

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
        newUser.name.length < minWordLength ||
        newUser.password !== newUser.passwordRepeat,
    );
  }, [newUser]);

  const onSumbit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        await AddUserApi(newUser);
        toast.success(`Succes in Register User`);
        setIsRedirec(true);
      } catch (_error) {
        toast.error(`Error in Register User`);
      }
    },
    [AddUserApi, newUser],
  );

  return (
    <UserRegisterStyled autoComplete="off" onSubmit={onSumbit}>
      <h2>User Register</h2>

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

      <div className="user-form__input">
        <label htmlFor="passwordRepeat">Repeat Password: </label>
        <input
          type="password"
          id="passwordRepeat"
          value={newUser.passwordRepeat}
          onChange={onChange}
          className="input-text"
          required
        />
      </div>

      <Button className="button--text" disable={buttonState}>
        Register
      </Button>
      {isRedirec && <Navigate to={`/login`} />}
    </UserRegisterStyled>
  );
};

export default UserRegister;
