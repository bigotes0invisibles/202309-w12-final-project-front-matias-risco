import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BaseCommentStructure, CommentStateStructure } from "./types";
import { copyComments } from "./utils";

export const initialCommentState: CommentStateStructure = {
  comments: [],
};

const commentSlice = createSlice({
  name: "uiState",
  initialState: initialCommentState,
  reducers: {
    loadComments: (
      currentState: CommentStateStructure,
      action: PayloadAction<BaseCommentStructure[]>,
    ): CommentStateStructure => ({
      ...currentState,
      comments: copyComments(action.payload),
    }),
  },
});

export default commentSlice.reducer;
export const { loadComments: loadCommentsActionCreator } = commentSlice.actions;
