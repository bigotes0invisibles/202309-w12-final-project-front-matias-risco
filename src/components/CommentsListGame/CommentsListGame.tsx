import React from "react";
import { useAppSelector } from "../../store/hooks";
import CommentGame from "../CommentGame/CommentGame";
import CommentsListGameStyled from "./CommentsListGameStyled";

const CommentsListGame = (): React.ReactElement => {
  const { comments } = useAppSelector(({ commentState }) => commentState);
  return (
    <CommentsListGameStyled>
      {comments.map((comment, index) => (
        <li key={index}>
          <CommentGame comment={comment} />
        </li>
      ))}
    </CommentsListGameStyled>
  );
};

export default CommentsListGame;
