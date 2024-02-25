import customRender from "../../utils/customRender";
import UserLogin from "./UserLogin";
import { fireEvent, screen } from "@testing-library/react";

describe("Given the component UserLogin", () => {
  describe("When UserLogin it is render, the username is Ana and the password is peke", () => {
    test("the user should have the button Login should be not disable", async () => {
      const testUsername = "Ana";
      const testPassword = "peke";
      const expectedButtonDisable = false;

      customRender(<UserLogin />, { isMemoryRouter: true });

      const inputUsernameElement = screen.getByRole("textbox", {
        name: "Username:",
      }) as HTMLInputElement;

      await fireEvent.change(inputUsernameElement, {
        target: {
          value: testUsername,
        },
      });

      const inputPasswordElement = screen.getByLabelText(
        "Password:",
      ) as HTMLInputElement;

      await fireEvent.change(inputPasswordElement, {
        target: {
          value: testPassword,
        },
      });

      const loginButton = (await screen.findByRole("button", {
        name: "Login",
      })) as HTMLButtonElement;

      console.log(loginButton);

      expect(loginButton.disabled).toBe(expectedButtonDisable);
    });
  });

  describe("When UserLogin it is render, the password is peke", () => {
    test("the user should have the button Login should be disable", async () => {
      const testPassword = "peke";
      const expectedButtonDisable = true;

      customRender(<UserLogin />, { isMemoryRouter: true });

      const inputPasswordElement = screen.getByLabelText(
        "Password:",
      ) as HTMLInputElement;

      await fireEvent.change(inputPasswordElement, {
        target: {
          value: testPassword,
        },
      });

      const loginButton = (await screen.findByRole("button", {
        name: "Login",
      })) as HTMLButtonElement;

      expect(loginButton.disabled).toBe(expectedButtonDisable);
    });
  });
});
