import { useState } from "react";

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

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewUser((newUser) => ({
      ...newUser,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <section>
      <h3>User Login</h3>

      <div>
        <label htmlFor="username">username: </label>
        <input
          type="text"
          id="username"
          value={newUser.username}
          onChange={onChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">password: </label>
        <input
          type="text"
          id="password"
          value={newUser.password}
          onChange={onChange}
          required
        />
      </div>
    </section>
  );
};

export default UserLogin;
