import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";

export interface UserStructure {
  name: string;
  password: string;
}

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useUserApi = () => {
  const getTokenApi = useCallback(async (user: UserStructure) => {
    try {
      const {
        data: { token },
      } = await axios.post<
        { user: UserStructure },
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
