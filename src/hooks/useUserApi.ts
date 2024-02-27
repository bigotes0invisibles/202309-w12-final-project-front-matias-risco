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

  return { getTokenApi };
};

export default useUserApi;
