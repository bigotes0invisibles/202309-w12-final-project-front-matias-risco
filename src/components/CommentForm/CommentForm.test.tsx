import { fireEvent, screen } from "@testing-library/react";
import customRender from "../../utils/customRender";

import CommentForm from "./CommentForm";

describe("Given the component CommentForm", () => {
  describe("When it is render", () => {
    test("then the Button 'upload comment' should be disabe", async () => {
      const expectButtonDisable = true;

      customRender(<CommentForm gameId="saefwq23refrswa" />, {
        isProvider: true,
        isToastify: true,
      });

      const ButtonElement = (await screen.findByRole("button", {
        name: "upload comment",
      })) as HTMLButtonElement;

      expect(ButtonElement.disabled).toBe(expectButtonDisable);
    });
  });

  describe("When it is render and the user write a New Comment and there is a game in store", () => {
    test("then the user should see the button 'upload comment'", async () => {
      const expectButtonDisable = false;
      const commentText = "alfa omega beta";
      const expectedToastText = "Succes in upload comment";

      customRender(
        <CommentForm gameId="saefwq23refrswa" />,
        {
          isProvider: true,
          isToastify: true,
        },
        {
          preloadedState: {
            userState: { name: "asdsasad", token: "asdasdas" },
          },
        },
      );

      const NewCommentElement = screen.getByRole("textbox", {
        name: "New comment",
      });

      await fireEvent.change(NewCommentElement, {
        target: {
          value: commentText,
        },
      });

      const ButtonElement = (await screen.findByRole("button", {
        name: "upload comment",
      })) as HTMLButtonElement;

      await fireEvent.click(ButtonElement);
      const ToastElement = await screen.findByText(expectedToastText);

      expect(ToastElement).toBeInTheDocument();
      expect(ButtonElement.disabled).toBe(expectButtonDisable);
    });
  });
});
