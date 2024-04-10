import React, { useCallback, useEffect, useState } from "react";
import CommentFormStyled from "./CommentFormStyled";
import Button from "../Button/Button";
import { AddCommentApiStructure } from "../../store/feature/comments/types";
import { useAppSelector } from "../../store/hooks";
import { toast } from "react-toastify";
import useCommentApi from "../../hooks/useCommentApi";

const InitialComment: AddCommentApiStructure = {
  _idGame: "",
  comment: "",
  response: [],
  token: "",
  username: "",
};

interface CommentFormParametersStructure {
  gameId: string;
}

const CommentForm = ({
  gameId,
}: CommentFormParametersStructure): React.ReactElement => {
  const [newComment, setNewComment] = useState(InitialComment);
  const { addCommentApi } = useCommentApi();
  const [disable, setDisable] = useState(true);
  const { token, name } = useAppSelector(({ userState }) => userState);

  useEffect(() => {
    newComment._idGame = gameId;
    newComment.token = token;
    newComment.username = name;
  }, [gameId, name, newComment, token]);

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        await addCommentApi(newComment);
        toast.success(`Succes in upload comment`);
      } catch (error) {
        toast.error(`Error in upload comment`);
      }
    },
    [addCommentApi, newComment],
  );

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment((newComment) => ({
      ...newComment,
      [event.target.id]: event.target.value,
    }));
  };

  useEffect(() => {
    setDisable(
      newComment.token === "" ||
        newComment.comment === "" ||
        newComment._idGame === "",
    );
  }, [newComment]);

  return (
    <CommentFormStyled onSubmit={onSubmit}>
      <label htmlFor="comment">New comment</label>
      <textarea
        name="comment"
        id="comment"
        className="comment--message"
        value={newComment.comment}
        onChange={onChange}
      />

      <Button className="button--text" disable={disable}>
        upload comment
      </Button>
    </CommentFormStyled>
  );
};

export default CommentForm;
