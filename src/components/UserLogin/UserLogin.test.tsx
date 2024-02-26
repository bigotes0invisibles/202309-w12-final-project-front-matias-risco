import userEvent from "@testing-library/user-event";
import customRender from "../../utils/customRender";
import UserLogin from "./UserLogin";
import { fireEvent, screen } from "@testing-library/react";
import { server } from "../../mocks/main";
import { handlersError } from "../../mocks/handlersError";

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

  describe("When UserLogin it is render, and the user try to login with the information of Ana", () => {
    test("then the user should see the message of succefull login", async () => {
      const testUsername = "Ana";
      const testPassword = "peke";
      const succesMessage = "Succes in Login";

      customRender(<UserLogin />, { isMemoryRouter: true, isToastify: true });

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

      await userEvent.click(loginButton);

      const tostifySuccesElement = await screen.findByText(succesMessage);

      expect(tostifySuccesElement).toBeInTheDocument();
    });
  });

  describe("When UserLogin it is render, and the user try to login with the information of Ana, but there is a Error", () => {
    test("then the user should see the message of fail login", async () => {
      server.use(...handlersError);
      const testUsername = "Ana";
      const testPassword = "peke";
      const ErrorMessage = "Error in Login";

      customRender(<UserLogin />, { isMemoryRouter: true, isToastify: true });

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

      await userEvent.click(loginButton);

      const tostifySuccesElement = await screen.findByText(ErrorMessage);

      expect(tostifySuccesElement).toBeInTheDocument();
    });
  });
});
