import { screen } from "@testing-library/react";
import { commentsMock } from "../../mocks/commentsMockData";
import customRender from "../../utils/customRender";
import CommentsListGame from "./CommentsListGame";
import { copyComments } from "../../store/feature/comments/utils";

describe("Given the component CommentsListGame", () => {
  describe("When CommentsListGame it is render with the comments of game CandyCrush", () => {
    test("the user should see the heading of Alfarium, decarium, corpo and mind_void", () => {
      const [alfariumComment, decariumComment, corpoComment, mindVoidComment] =
        commentsMock;
      const tag = "heading";
      const commentUserSubText = "user: ";
      const expectedTextAlfarium =
        commentUserSubText + alfariumComment.userName;
      const expectedTextDecarium =
        commentUserSubText + decariumComment.userName;
      const expectedTextCorpo = commentUserSubText + corpoComment.userName;
      const expectedTextMindVoid =
        commentUserSubText + mindVoidComment.userName;

      customRender(
        <CommentsListGame />,
        { isProvider: true },
        {
          preloadedState: {
            commentState: { comments: copyComments(commentsMock) },
          },
        },
      );

      const headingElementAlfarium = screen.getByRole(tag, {
        name: expectedTextAlfarium,
      });

      const headingElementDecarium = screen.getByRole(tag, {
        name: expectedTextDecarium,
      });

      const headingElementCorpo = screen.getByRole(tag, {
        name: expectedTextCorpo,
      });

      const headingElementMindVoid = screen.getByRole(tag, {
        name: expectedTextMindVoid,
      });

      expect(headingElementAlfarium).toBeInTheDocument();
      expect(headingElementDecarium).toBeInTheDocument();
      expect(headingElementCorpo).toBeInTheDocument();
      expect(headingElementMindVoid).toBeInTheDocument();
    });
  });
});
