import { FullCommentApiStructure } from "../store/feature/comments/types";
import gamesMock from "./gamesMockData";

export const commentsMock: FullCommentApiStructure[] = [
  {
    id: "awfij081ufj0892f",
    idGame: gamesMock[1].id,
    idUser: "1235131212gw3tqw3tgwfg3",
    comment: "hola me llamo matias",
    response: [],
    userName: "alfarium",
  },
  {
    id: "f12ouy1ho9if71y9f",
    idGame: gamesMock[1].id,
    idUser: "d1qoh2ud19io2fuh1",
    comment: "afajlwfjlajwfiawfj",
    response: [],
    userName: "decarium",
  },
  {
    id: "1lf1jjf9229dd912d9",
    idGame: gamesMock[1].id,
    idUser: "d;qkjd1209dj90d2912dj",
    comment: "algo estoy commentando",
    response: [],
    userName: "corpo",
  },
  {
    id: "1lf1jjf9229dd912d9",
    idGame: gamesMock[1].id,
    idUser: "d;qkjd1209dj90d2912dj",
    comment: "algo estoy commentando en games 1",
    response: [],
    userName: "mind_void",
  },
];
