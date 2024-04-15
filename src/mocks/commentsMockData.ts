import { BaseCommentStructure } from "../store/feature/comments/types";
import gamesMock from "./gamesMockData";

export const commentsMock: BaseCommentStructure[] = [
  {
    id: "awfij081ufj0892f",
    _idGame: gamesMock[1].id,
    _idUser: "1235131212gw3tqw3tgwfg3",
    comment: "hola me llamo matias",
    response: [],
    userName: "alfarium",
  },
  {
    id: "f12ouy1ho9if71y9f",
    _idGame: gamesMock[1].id,
    _idUser: "d1qoh2ud19io2fuh1",
    comment: "afajlwfjlajwfiawfj",
    response: [],
    userName: "decarium",
  },
  {
    id: "1lf1jjf9229dd912d9",
    _idGame: gamesMock[1].id,
    _idUser: "d;qkjd1209dj90d2912dj",
    comment: "algo estoy commentando",
    response: [],
    userName: "alfarium",
  },
  {
    id: "1lf1jjf9229dd912d9",
    _idGame: gamesMock[1].id,
    _idUser: "d;qkjd1209dj90d2912dj",
    comment: "algo estoy commentando en games 1",
    response: [],
    userName: "alfarium",
  },
];
