import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import {
  AddCommentApiStructure,
  CommentApiStructure,
} from "../store/feature/comments/types";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useCommentApi = () => {
  const addCommentApi = useCallback(
    async (
      newComment: AddCommentApiStructure,
    ): Promise<CommentApiStructure> => {
      try {
        const {
          data: { comment },
        } = await axios.post<
          { comment: AddCommentApiStructure },
          AxiosResponse<{ comment: CommentApiStructure }>
        >("/comments/add", {
          comment: newComment,
        });

        return comment;
      } catch (error) {
        throw new Error("Error in adding new commnet");
      }
    },
    [],
  );

  return { addCommentApi };
};

export default useCommentApi;
