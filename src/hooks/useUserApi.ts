import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import { UserBaseStructure } from "../store/feature/user/types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useUserApi = () => {
  const getTokenApi = useCallback(async (user: UserBaseStructure) => {
    try {
      const {
        data: { token },
      } = await axios.post<
        { user: UserBaseStructure },
        AxiosResponse<{ token: string }>
      >("/users/login", {
        user,
      });

      return token;
    } catch (error) {
      throw new Error("Error in login, username or password is incorrect");
    }
  }, []);

  const AddUserApi = useCallback(async (newUser: UserBaseStructure) => {
    try {
      const {
        data: { user },
      } = await axios.post<{ user: UserBaseStructure }>("/users/add", {
        user: newUser,
      });

      return user;
    } catch (error) {
      throw new Error("Error in register new user");
    }
  }, []);

  return { getTokenApi, AddUserApi };
};

export default useUserApi;
