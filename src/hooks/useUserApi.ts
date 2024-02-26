import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";

export interface UserStructure {
  username: string;
  password: string;
}

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useUserApi = () => {
  const getTokenApi = useCallback(async (user: UserStructure) => {
    try {
      const {
        data: { token },
      } = await axios.get<
        { user: UserStructure },
        AxiosResponse<{ token: string }>
      >("/users/login", {
        data: { user },
      });

      return token;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }, []);

  return { getTokenApi };
};

export default useUserApi;
