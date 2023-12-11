import { http, HttpResponse, PathParams } from "msw";
import { mockGames } from "../setupTests";
import {
  GameWithOutIdStructure,
  GameWithPartialBodyStructure,
} from "../store/feature/games/types";
import gamesMock from "./gamesMockData";

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
      const gameApi = mockGames.find((game) => game.id === game.id);

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
];
