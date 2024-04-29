import { useCallback } from "react";
import { GameStructure } from "../store/feature/games/types";
import useGameApi from "./useGameApi";
import { toast } from "react-toastify";
import { loadGamesActionCreator } from "../store/feature/games/gamesSlice";
import { useAppDispatch } from "../store/hooks";
import { copyGame } from "../store/feature/games/utils";

interface DependenciesStructure {
  games: GameStructure[];
  setGame: React.Dispatch<React.SetStateAction<GameStructure>>;
  setIsErrorLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const usePageHooks = () => {
  const { infoGameApi } = useGameApi();
  const dispatch = useAppDispatch();

  const loadingGameByIdParams = useCallback(
    async (
      idGame: string,
      { games, setGame, setIsErrorLoading }: DependenciesStructure,
    ) => {
      let newGame = games.find(({ id }) => id === idGame);

      if (newGame) {
        setGame(copyGame(newGame));
        return;
      }

      try {
        newGame = await infoGameApi(idGame);
        setGame(newGame);
        dispatch(loadGamesActionCreator([newGame, ...games]));
      } catch (_error) {
        toast.error("Error game not found");
        setIsErrorLoading(true);
      }
    },
    [dispatch, infoGameApi],
  );

  return { loadingGameByIdParams };
};

export default usePageHooks;
