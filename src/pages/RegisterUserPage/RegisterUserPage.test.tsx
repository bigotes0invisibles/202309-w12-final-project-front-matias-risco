import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import RegisterUserPage from "./RegisterUserPage";

describe("Given the Page RegisterUserPage", () => {
  describe("When RegisterUserPage it is render", () => {
    test("the user should see the heading of 'RegisterUserPage' is Register", () => {
      const expetedText = "Register";
      const tag = "heading";

      customRender(<RegisterUserPage />, {
        isProvider: true,
        isMemoryRouter: true,
      });

      const headingElement = screen.getByRole(tag, { name: expetedText });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
