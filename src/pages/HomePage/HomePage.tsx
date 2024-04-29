import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import {
  loadGamesActionCreator,
  setGameMaxPageActionCreator,
  setGamePageActionCreator,
} from "../../store/feature/games/gamesSlice";
import GamesList from "../../components/GamesList/GamesList";
import useGameApi from "../../hooks/useGameApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useSearchParams } from "react-router-dom";

const HomePage = (): React.ReactElement => {
  const [urlParams] = useSearchParams();
  const urlPage = Math.floor(Math.max(0, Number(urlParams.get("page")))) || 1;
  const [page, setPage] = useState(urlPage);
  const [isCountLoading, setIsCountLoading] = useState(false);

  const dispatch = useAppDispatch();
  const { getGamesApi, countGameApi } = useGameApi();
  const { page: pageGames } = useAppSelector(({ gameState }) => gameState);
  const { maxPage } = useAppSelector(({ gameState }) => gameState);

  useEffect(() => {
    setPage(urlPage);
  }, [urlPage]);

  useEffect(() => {
    (async () => {
      if (page === pageGames) {
        return;
      }
      window.scroll(0, 0);

      try {
        const gamesData = await getGamesApi(page - 1);

        if (gamesData.length) {
          dispatch(setGamePageActionCreator(page));
          dispatch(loadGamesActionCreator(gamesData));
        }
      } catch (_error) {
        await toast.error("Error in loading page");
      }
    })();
  }, [dispatch, getGamesApi, page, pageGames]);

  useEffect(() => {
    (async () => {
      if (isCountLoading) {
        return;
      }

      try {
        const totalGames = await countGameApi();
        const maxPage = Math.floor(totalGames / 10) + 1;

        dispatch(setGameMaxPageActionCreator(maxPage));
        setIsCountLoading(true);

        if (page > maxPage) {
          setPage(maxPage);
        }
      } catch {
        toast.error("Problems in counting number of games");
      }
    })();
  }, [countGameApi, dispatch, isCountLoading, page]);

  return (
    <HomePageStyled>
      <h1>Games</h1>
      <GamesList />
      <div className="game-page">
        {page > 1 && (
          <NavLink
            to={`/home?page=${page - 1}`}
            className="game-page__previous"
          >
            Previous
          </NavLink>
        )}
        {page < maxPage && (
          <NavLink
            to={`/home?page=${page < 2 ? 2 : page + 1}`}
            className="game-page__next"
          >
            Next
          </NavLink>
        )}
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
