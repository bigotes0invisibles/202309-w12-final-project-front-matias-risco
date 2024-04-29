import { commentsMock } from "../../../../mocks/commentsMockData";
import { addCommentActionCreator, initialCommentState } from "../commentSlice";
import { copyComment } from "../utils";
import commentsReducer from "../commentSlice";

describe("Given the reducer of comments", () => {
  describe("When the reducer recive the actualState and the action addComments with the payload of a new comment", () => {
    test("then it should return a newState with comments updated", () => {
      const commentsApi = copyComment(commentsMock[0]);
      const actualState = initialCommentState;
      const actionAdd = addCommentActionCreator(commentsApi);

      const newState = commentsReducer(actualState, actionAdd);

      expect(newState.comments).toEqual(expect.arrayContaining([commentsApi]));
    });
  });
});
