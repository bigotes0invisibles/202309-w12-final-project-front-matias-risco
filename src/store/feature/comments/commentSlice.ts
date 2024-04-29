import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BaseCommentStructure, CommentStateStructure } from "./types";
import { copyComment, copyComments } from "./utils";

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

    addComment: (
      currentState: CommentStateStructure,
      action: PayloadAction<BaseCommentStructure>,
    ): CommentStateStructure => ({
      ...currentState,
      comments: [
        ...copyComments(currentState.comments),
        copyComment(action.payload),
      ],
    }),
  },
});

export default commentSlice.reducer;
export const {
  loadComments: loadCommentsActionCreator,
  addComment: addCommentActionCreator,
} = commentSlice.actions;
