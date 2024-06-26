import { renderHook } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../../store";
import {
  AddCommentApiStructure,
  BaseCommentStructure,
} from "../../store/feature/comments/types";
import useCommentApi from "../useCommentApi";
import { server } from "../../mocks/main";
import { handlersError } from "../../mocks/handlersError";
import { commentsMock } from "../../mocks/commentsMockData";

describe("Given the hook useCommentApi", () => {
  describe("When addCommentApi is call with new comment of Ana without containing id", () => {
    test("it should return a new comment of Ana with a id", async () => {
      const newComment: AddCommentApiStructure = {
        idGame: "dw12321r24t3t34y523",
        comment: "asdfagtfq3wagfasf",
        response: [],
        token: "asdfa2dadfafa2A2a",
        userName: "Ana",
      };

      const {
        result: {
          current: { addCommentApi },
        },
      } = renderHook(useCommentApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={store}>{children}</Provider>
        ),
      });

      const actualComment = await addCommentApi(newComment);

      expect(actualComment).toEqual(
        expect.objectContaining({
          id: expect.stringContaining(""),
        }),
      );
    });
  });

  describe("When addCommentApi is call with new comment of Ana without containing id, but there is a Error", () => {
    test("it should throw 'Error in adding new commnet'", async () => {
      server.use(...handlersError);
      const expectedError = "Error in adding new commnet";
      const newComment: AddCommentApiStructure = {
        idGame: "dw12321r24t3t34y523",
        comment: "asdfagtfq3wagfasf",
        response: [],
        token: "asdfa2dadfafa2A2a",
        userName: "Ana",
      };

      const {
        result: {
          current: { addCommentApi },
        },
      } = renderHook(useCommentApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={store}>{children}</Provider>
        ),
      });

      let actualError: string = "hey this is not a error";

      try {
        await addCommentApi(newComment);
      } catch (error) {
        actualError = (error as Error).message;
      }

      expect(actualError).toBe(expectedError);
    });
  });

  describe("When getCommentsApi is call with the id of Candy crush", () => {
    test("it should return all the comments witch have the id of Candycrush", async () => {
      const gameId = commentsMock[0].idGame;
      const expectedComments: BaseCommentStructure[] = commentsMock
        .filter((comment) => comment.idGame === gameId)
        .map(({ idGame, idUser, ...baseComment }) => baseComment);

      const {
        result: {
          current: { getCommentsApi },
        },
      } = renderHook(useCommentApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={store}>{children}</Provider>
        ),
      });

      const actualComments = await getCommentsApi(gameId);

      expect(actualComments).toStrictEqual(expectedComments);
    });
  });

  describe("When getCommentsApi is call with the id of Candy crush", () => {
    test("it should throw 'Error in getting comments'", async () => {
      server.use(...handlersError);
      const gameId = commentsMock[0].idGame;
      const expectedError = "Error in gettting comments";

      const {
        result: {
          current: { getCommentsApi },
        },
      } = renderHook(useCommentApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={store}>{children}</Provider>
        ),
      });

      let actualError: string = "hey this is not a error";

      try {
        await getCommentsApi(gameId);
      } catch (error) {
        actualError = (error as Error).message;
      }

      expect(actualError).toBe(expectedError);
    });
  });
});
