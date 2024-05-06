import { BaseCommentStructure } from "../../store/feature/comments/types";
import CommentGameStyled from "./CommentGameStyled";

interface CommentsGameParamsStructure {
  comment: BaseCommentStructure;
}

const CommentGame = ({
  comment: { comment, userName },
}: CommentsGameParamsStructure): React.ReactElement => {
  return (
    <CommentGameStyled>
      <h3 className="comment__user">user: {userName}</h3>
      <p className="comment__text">{comment}</p>
    </CommentGameStyled>
  );
};

export default CommentGame;
