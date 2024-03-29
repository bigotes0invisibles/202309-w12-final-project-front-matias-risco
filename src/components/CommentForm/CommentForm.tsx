import React, { useCallback, useEffect, useState } from "react";
import CommentFormStyled from "./CommentFormStyled";
import Button from "../Button/Button";
import { CommentApiStructure } from "../../store/feature/comments/types";
import { useAppSelector } from "../../store/hooks";
import { toast } from "react-toastify";

const InitialComment: CommentApiStructure = {
  _idGame: "",
  comment: "",
  id: "",
  response: [],
  token: "",
};

interface CommentFormParametersStructure {
  gameId: string;
}

const CommentForm = ({
  gameId,
}: CommentFormParametersStructure): React.ReactElement => {
  const [newComment, setNewComment] = useState(InitialComment);
  const [disable, setDisable] = useState(true);
  const { token } = useAppSelector(({ userState }) => userState);

  useEffect(() => {
    newComment._idGame = gameId;
    newComment.token = token;
  }, [gameId, token, newComment]);

  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success(`Succes in upload comment`);
  }, []);

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
