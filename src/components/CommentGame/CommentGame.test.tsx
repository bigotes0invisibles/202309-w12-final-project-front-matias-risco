import { screen } from "@testing-library/react";
import { commentsMock } from "../../mocks/commentsMockData";
import customRender from "../../utils/customRender";
import CommentGame from "./CommentGame";

describe("Given the component CommentGame", () => {
  describe("When CommentGame it is render with the comment made by alfarium", () => {
    test("the user should see the heading of Alfarium", () => {
      const alfariumComment = commentsMock[0];
      const tag = "heading";
      const commentUserSubText = "user: ";
      const expectedText = commentUserSubText + alfariumComment.userName;

      customRender(<CommentGame comment={alfariumComment} />);

      const headingElement = screen.getByRole(tag, { name: expectedText });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
