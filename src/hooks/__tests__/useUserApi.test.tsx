import { renderHook } from "@testing-library/react";
import useUserApi from "../useUserApi";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../../store";
import usersMocks, { tokenMock } from "../../mocks/userMockData";

describe("Given the hook useUserApi", () => {
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
