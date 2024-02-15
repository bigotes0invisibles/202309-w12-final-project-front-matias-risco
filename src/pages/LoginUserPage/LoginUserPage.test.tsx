import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import LoginUserPage from "./LoginUserPage";

describe("Given the Page LoginUserPage", () => {
  describe("When LoginUserPage it is render", () => {
    test("the user should see the heading of 'LoginUserPage' is Login", () => {
      const expetedText = "Login";
      const tag = "heading";

      customRender(<LoginUserPage />, {
        isProvider: true,
        isMemoryRouter: true,
      });

      const headingElement = screen.getByRole(tag, { name: expetedText });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
