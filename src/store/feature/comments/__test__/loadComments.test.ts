import { commentsMock } from "../../../../mocks/commentsMockData";
import {
  initialCommentState,
  loadCommentsActionCreator,
} from "../commentSlice";
import { copyComments } from "../utils";
import commentsReducer from "../commentSlice";

describe("Given the reducer of comments", () => {
  describe("When the reducer recive the actualState and the action loadComments", () => {
    test("then it should return a newState with comments updated", () => {
      const commentsApi = copyComments(commentsMock);
      const actualState = initialCommentState;
      const actionLoad = loadCommentsActionCreator(commentsApi);

      const newState = commentsReducer(actualState, actionLoad);

      expect(newState.comments).toStrictEqual(commentsApi);
    });
  });
});
