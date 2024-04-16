import { BaseCommentStructure } from "../../store/feature/comments/types";

interface CommentsGameParamsStructure {
  comment: BaseCommentStructure;
}

const CommentGame = ({
  comment: { comment, userName },
}: CommentsGameParamsStructure): React.ReactElement => {
  return (
    <section>
      <h3>{userName}</h3>
      <p>{comment}</p>
    </section>
  );
};

export default CommentGame;
