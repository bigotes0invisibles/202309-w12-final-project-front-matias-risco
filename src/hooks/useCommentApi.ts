import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import {
  AddCommentApiStructure,
  BaseCommentStructure,
} from "../store/feature/comments/types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useCommentApi = () => {
  const addCommentApi = useCallback(
    async (
      newComment: AddCommentApiStructure,
    ): Promise<BaseCommentStructure> => {
      try {
        const {
          data: { comment },
        } = await axios.post<
          { comment: AddCommentApiStructure },
          AxiosResponse<{ comment: BaseCommentStructure }>
        >("/comments/add", {
          comment: newComment,
        });

        return comment;
      } catch (_error) {
        throw new Error("Error in adding new commnet");
      }
    },
    [],
  );

  const getCommentsApi = useCallback(
    async (gameId: string): Promise<BaseCommentStructure[]> => {
      try {
        const {
          data: { comments },
        } = await axios.get<
          { idGame: string },
          AxiosResponse<{ comments: BaseCommentStructure[] }>
        >("/comments", {
          params: {
            idGame: gameId,
          },
        });

        return comments;
      } catch (_error) {
        throw new Error("Error in gettting comments");
      }
    },
    [],
  );

  return { addCommentApi, getCommentsApi };
};

export default useCommentApi;
