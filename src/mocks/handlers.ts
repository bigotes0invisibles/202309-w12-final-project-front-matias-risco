import { http, HttpResponse, PathParams } from "msw";
import { mockGames } from "../setupTests";
import {
  GameWithOutIdStructure,
  GameWithPartialBodyStructure,
} from "../store/feature/games/types";
import gamesMock from "./gamesMockData";
import { tokenMock } from "./userMockData";
import { UserBaseStructure } from "../store/feature/user/types";
import {
  AddCommentApiStructure,
  BaseCommentStructure,
} from "../store/feature/comments/types";
import { commentsMock } from "./commentsMockData";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(`${urlApi}/games`, ({ request }) => {
    const url = new URL(request.url);

    const page = +url.searchParams.get("page")!;

    const games = mockGames.filter(
      (_game, pocition) => pocition >= page * 10 && pocition <= (page + 1) * 10,
    );

    return HttpResponse.json({ games });
  }),

  http.delete(`${urlApi}/games/delete/:idGame`, (req) => {
    const { idGame } = req.params;
    const gameIndex = mockGames.findIndex((game) => game.id === idGame);
    if (gameIndex === -1) {
      return HttpResponse.error();
    } else {
      const game = mockGames.splice(gameIndex, 1);
      return HttpResponse.json({ game });
    }
  }),

  http.post<PathParams, { game: GameWithOutIdStructure }>(
    `${urlApi}/games/add`,
    async ({ request }) => {
      const { game } = await request.json();
      const id = Math.floor(Math.random() * 10000).toString();
      return HttpResponse.json({ game: { ...game, id } });
    },
  ),

  http.get(`${urlApi}/games/info/:idGame`, (req) => {
    const { idGame } = req.params;
    const game = mockGames.find((game) => game.id === idGame);
    if (game === undefined) {
      return HttpResponse.error();
    } else {
      return HttpResponse.json({ game });
    }
  }),

  http.patch<PathParams, { game: GameWithPartialBodyStructure }>(
    `${urlApi}/games/edit`,
    async ({ request }) => {
      const { game } = await request.json();
      const gameApi = mockGames.find(({ id }) => id === game.id);

      if (gameApi === undefined) {
        return HttpResponse.error();
      } else {
        return HttpResponse.json({ game: { ...gameApi, ...game } });
      }
    },
  ),

  http.get(`${urlApi}/games/count`, () => {
    return HttpResponse.json({ numberGames: gamesMock.length });
  }),

  http.post(`${urlApi}/users/login`, () => {
    return HttpResponse.json({ token: tokenMock });
  }),

  http.post<PathParams, { user: UserBaseStructure }>(
    `${urlApi}/users/add`,
    async ({ request }) => {
      const { user } = await request.json();
      const id = Math.floor(Math.random() * 10000).toString();
      return HttpResponse.json({ user: { name: user.name, id } });
    },
  ),

  http.post<PathParams, { comment: AddCommentApiStructure }>(
    `${urlApi}/comments/add`,
    async ({ request }) => {
      const { comment } = await request.json();

      const { token: _token, ...commentAlfa } = comment;

      const newComment: BaseCommentStructure = {
        ...commentAlfa,
        id: "adawd221312",
        _idUser: "asdfaf",
      };

      return HttpResponse.json({ comment: { ...newComment } });
    },
  ),

  http.get(`${urlApi}/comments`, ({ request }) => {
    const url = new URL(request.url);

    const idGame = url.searchParams.get("idGame")!;
    const comments = commentsMock.filter(
      (comments) => comments._idGame === idGame,
    );
    return HttpResponse.json({ comments });
  }),
];
