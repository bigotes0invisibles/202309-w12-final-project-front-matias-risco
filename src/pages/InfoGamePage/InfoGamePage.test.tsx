import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import InfoGamePage from "./InfoGamePage";
import gamesMock from "../../mocks/gamesMockData";
import { Route, Routes } from "react-router-dom";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { commentsMock } from "../../mocks/commentsMockData";

describe("Given the component InfoGamePage", () => {
  const preloadedStateGamesLoaded: PreloadedState<RootState> = {
    gameState: {
      games: gamesMock,
      page: 0,
      maxPage: Math.floor(gamesMock.length / 10) + 1,
    },
  };
  describe("When InfoGamePage it is render with the id of 'Ultrakill'and it is not load in store", () => {
    test("the user should see the heading of InfoGame is 'Ultrakill'", async () => {
      const expectedTitle = "Ultrakill";
      const tag = "heading";

      customRender(
        <Routes>
          <Route path="/game/info/:idGame" element={<InfoGamePage />} />
        </Routes>,
        { isMemoryRouter: true, isProvider: true },
        {
          preloadedState: {
            gameState: {
              games: [],
              page: 0,
              maxPage: Math.floor(gamesMock.length / 10) + 1,
            },
          },
          initialPath: `/game/info/${gamesMock[0].id}`,
        },
      );

      const titleElement = await screen.findByRole(tag, {
        name: expectedTitle,
      });

      expect(titleElement).toBeInTheDocument();
    });
  });

  describe("When InfoGamePage it is render and alredy have load the info of 'candyCrush'", () => {
    test("the user should see the comments of the game 'candyCrush'", async () => {
      const tag = "heading";
      const candyCrushId = gamesMock[1].id;
      const [alfariumComment, decariumComment, corpoComment, mindVoidComment] =
        commentsMock;
      const expectedTextAlfarium = alfariumComment.userName;
      const expectedTextDecarium = decariumComment.userName;
      const expectedTextCorpo = corpoComment.userName;
      const expectedTextMindVoid = mindVoidComment.userName;

      customRender(
        <Routes>
          <Route path="/game/info/:idGame" element={<InfoGamePage />} />
        </Routes>,
        { isMemoryRouter: true, isProvider: true },
        {
          preloadedState: preloadedStateGamesLoaded,
          initialPath: `/game/info/${candyCrushId}`,
        },
      );
      const headingElementAlfarium = await screen.findByRole(tag, {
        name: expectedTextAlfarium,
      });

      const headingElementDecarium = await screen.findByRole(tag, {
        name: expectedTextDecarium,
      });

      const headingElementCorpo = await screen.findByRole(tag, {
        name: expectedTextCorpo,
      });

      const headingElementMindVoid = await screen.findByRole(tag, {
        name: expectedTextMindVoid,
      });

      expect(headingElementAlfarium).toBeInTheDocument();
      expect(headingElementDecarium).toBeInTheDocument();
      expect(headingElementCorpo).toBeInTheDocument();
      expect(headingElementMindVoid).toBeInTheDocument();
    });
  });

  describe("When InfoGamePage it is render and alredy have load the info of 'ultrakill'", () => {
    test("the user should see the heading of component infoGame is 'Ultrakiil'", async () => {
      const expectedTitle = "Ultrakill";
      const tag = "heading";

      customRender(
        <Routes>
          <Route path="/game/info/:idGame" element={<InfoGamePage />} />
        </Routes>,
        { isMemoryRouter: true, isProvider: true },
        {
          preloadedState: preloadedStateGamesLoaded,
          initialPath: `/game/info/${gamesMock[0].id}`,
        },
      );

      const titleElement = await screen.findByRole(tag, {
        name: expectedTitle,
      });

      expect(titleElement).toBeInTheDocument();
    });
  });

  describe("When InfoGamePage it is render and with id witch store and the database don't have", () => {
    test("the user should see the testify error with the message 'Error game not found'", async () => {
      const expectedFeedBack = "Error game not found";
      const id = "656ab0000000000000000000";

      customRender(
        <Routes>
          <Route path="/game/info/:idGame" element={<InfoGamePage />} />
        </Routes>,
        { isMemoryRouter: true, isProvider: true, isToastify: true },
        {
          preloadedState: {
            gameState: {
              games: gamesMock,
              page: 0,
              maxPage: Math.floor(gamesMock.length / 10) + 1,
            },
          },
          initialPath: `/game/info/${id}`,
        },
      );

      const feedBackTextElement = await screen.findByText(expectedFeedBack);

      expect(feedBackTextElement).toBeInTheDocument();
    });
  });
});
