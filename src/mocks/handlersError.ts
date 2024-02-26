import { http, HttpResponse } from "msw";

const urlApi = import.meta.env.VITE_API_URL;

export const handlersError = [
  http.get(`${urlApi}/games`, () => {
    return HttpResponse.error();
  }),

  http.delete(`${urlApi}/games/delete/:idGame`, () => {
    return HttpResponse.error();
  }),

  http.post(`${urlApi}/games/add`, () => {
    return HttpResponse.error();
  }),

  http.get(`${urlApi}/games/info/:idGame`, () => {
    return HttpResponse.error();
  }),

  http.patch(`${urlApi}/games/edit`, () => {
    return HttpResponse.error();
  }),

  http.get(`${urlApi}/games/count`, () => {
    return HttpResponse.error();
  }),

  http.get(`${urlApi}/users/login`, () => {
    return HttpResponse.error();
  }),
];
