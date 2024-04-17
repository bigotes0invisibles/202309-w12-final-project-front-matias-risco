import { BaseCommentStructure } from "./types";

export const copyComment = (
  comment: BaseCommentStructure,
): BaseCommentStructure => ({
  ...comment,
  response: [...comment.response],
});

export const copyComments = (
  comments: BaseCommentStructure[],
): BaseCommentStructure[] => comments.map((comment) => copyComment(comment));
