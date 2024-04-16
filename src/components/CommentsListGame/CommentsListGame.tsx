import React from "react";
import { useAppSelector } from "../../store/hooks";
import CommentGame from "../CommentGame/CommentGame";

const CommentsListGame = (): React.ReactElement => {
  const { comments } = useAppSelector(({ commentState }) => commentState);
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          <CommentGame comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentsListGame;
