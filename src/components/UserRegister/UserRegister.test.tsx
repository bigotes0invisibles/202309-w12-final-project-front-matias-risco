import { fireEvent, screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import UserRegister from "./UserRegister";
import userEvent from "@testing-library/user-event";

describe("Given the component UserRegister", () => {
  describe("When UserRegister it is render, the username is Ana and the password is peke and the repited password is peke", () => {
    test("the user should have the button Register should be not disable", async () => {
      const testUsername = "Ana";
      const testPassword = "peke";
      const expectedButtonDisable = false;

      customRender(<UserRegister />, {
        isMemoryRouter: true,
        isProvider: true,
        isToastify: true,
      });

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

      const inputRepeatPasswordElement = screen.getByLabelText(
        "Repeat Password:",
      ) as HTMLInputElement;

      await fireEvent.change(inputRepeatPasswordElement, {
        target: {
          value: testPassword,
        },
      });

      const registerButton = (await screen.findByRole("button", {
        name: "Register",
      })) as HTMLButtonElement;

      expect(registerButton.disabled).toBe(expectedButtonDisable);
    });
  });

  describe("When UserRegister it is render, the username is Ana and the password is peke and the repited password is peke and the User press the Register button", () => {
    test("the user should have the button Register should be not disable", async () => {
      const testUsername = "Ana";
      const testPassword = "peke";
      const succesMessage = "Succes in Register User";

      customRender(<UserRegister />, {
        isMemoryRouter: true,
        isProvider: true,
        isToastify: true,
      });

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

      const inputRepeatPasswordElement = screen.getByLabelText(
        "Repeat Password:",
      ) as HTMLInputElement;

      await fireEvent.change(inputRepeatPasswordElement, {
        target: {
          value: testPassword,
        },
      });

      const registerButton = (await screen.findByRole("button", {
        name: "Register",
      })) as HTMLButtonElement;

      await userEvent.click(registerButton);

      const tostifySuccesElement = await screen.findByText(succesMessage);

      expect(tostifySuccesElement).toBeInTheDocument();
    });
  });
});
