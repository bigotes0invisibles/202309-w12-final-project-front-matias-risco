import { renderHook } from "@testing-library/react";
import useUserApi from "../useUserApi";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../../store";
import usersMocks, { tokenMock } from "../../mocks/userMockData";
import { server } from "../../mocks/main";
import { handlersError } from "../../mocks/handlersError";

describe("Given the hook useUserApi", () => {
  describe("When getTokenApi is call with the user information of Ana, but there is a error", () => {
    test("it should return a Error", async () => {
      server.use(...handlersError);
      const user = usersMocks;

      let testError: string;
      const expectedError = "Error in login, username or password is incorrect";

      const {
        result: {
          current: { getTokenApi },
        },
      } = renderHook(useUserApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={store}>{children}</Provider>
        ),
      });

      try {
        await getTokenApi(user);

        testError = "";
      } catch (error) {
        testError = (error as Error).message;
      }

      expect(testError).toBe(expectedError);
    });
  });

  describe("When getTokenApi is call with the user information of Ana", () => {
    test("it should return a token", async () => {
      const user = usersMocks;
      const expectedToken = tokenMock;

      const {
        result: {
          current: { getTokenApi },
        },
      } = renderHook(useUserApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={store}>{children}</Provider>
        ),
      });

      const actualToken = await getTokenApi(user);

      expect(actualToken).toBe(expectedToken);
    });
  });
});
