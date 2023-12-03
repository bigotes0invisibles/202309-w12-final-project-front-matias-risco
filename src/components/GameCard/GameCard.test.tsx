import { screen } from "@testing-library/react";
import gamesMock from "../../mocks/gamesMockData";
import customRender from "../../utils/customRender";
import GameCard from "./GameCard";
import userEvent from "@testing-library/user-event";
import * as dispacher from "../../store/hooks";
import { AnyAction, CombinedState, ThunkDispatch } from "@reduxjs/toolkit";
import { GameStateStructure } from "../../store/feature/games/types";
import { Dispatch } from "react";
import { server } from "../../mocks/main";
import { handlersError } from "../../mocks/handlersError";
import { toast } from "react-toastify";

describe("Given the component GameCard", () => {
  describe("When UserCard it is render with the information of ultrakill", () => {
    test("the user should see the heading of Ultrakill", () => {
      const ultrakill = gamesMock[0];
      const tag = "heading";
      const expectedText = ultrakill.name;

      customRender(<GameCard game={ultrakill} />, {
        isMemoryRouter: true,
        isProvider: true,
      });

      const headingElement = screen.getByRole(tag, {
        name: expectedText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("When UserCard it is render with the information of ultrakill and user clicks in button delete", () => {
    test("the user shouldn't see the heading of Ultrakill", async () => {
      const logSpy = vitest.spyOn(dispacher, "useAppDispatch");
      const dispatch = vitest.fn();

      logSpy.mockReturnValue(
        dispatch as unknown as ThunkDispatch<
          CombinedState<{ gameState: GameStateStructure }>,
          undefined,
          AnyAction
        > &
          Dispatch<AnyAction>,
      );

      const ultrakill = gamesMock[0];

      customRender(<GameCard game={ultrakill} />, {
        isMemoryRouter: true,
        isProvider: true,
      });

      const deleteButton = screen.getByRole("button", {
        name: "button Eliminate",
      });

      await userEvent.click(deleteButton);

      const promise = new Promise((resolve) => {
        setTimeout(() => resolve("done"), 50);
      });

      await promise;

      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ payload: ultrakill.id }),
      );
      logSpy.mockClear();
    });
  });

  describe("When UserCard it is render with the information of ultrakill and user clicks in button delete but there is a error", () => {
    test("then it should call  object toast with the method error", async () => {
      const expectedParameter = "Error in delete game";
      const logSpy = vitest.spyOn(toast, "error");
      server.use(...handlersError);

      const ultrakill = gamesMock[0];

      customRender(<GameCard game={ultrakill} />, {
        isMemoryRouter: true,
        isProvider: true,
      });

      const deleteButton = screen.getByRole("button", {
        name: "button Eliminate",
      });

      await userEvent.click(deleteButton);

      const promise = new Promise((resolve) => {
        setTimeout(() => resolve("done"), 50);
      });
      await promise;

      expect(logSpy).toBeCalledWith(expectedParameter);
      logSpy.mockClear();
    });
  });
});
