import { Navigate, useParams } from "react-router-dom";
import InfoGamePageStyled from "./InfoGamePageStyled";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import GameInfo from "../../components/GameInfo/GameInfo";
import usePageHooks from "../../hooks/usePageHooks";
import { initialGame } from "../../store/feature/games/utils";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentsListGame from "../../components/CommentsListGame/CommentsListGame";

const InfoGamePage = (): React.ReactElement => {
  const { idGame } = useParams<{ idGame: string }>();
  const { games } = useAppSelector(({ gameState }) => gameState);
  const [game, setGame] = useState(initialGame);
  const [isErrorLoading, setIsErrorLoading] = useState(false);
  const { loadingGameByIdParams } = usePageHooks();

  useEffect(() => {
    loadingGameByIdParams(idGame!, { games, setGame, setIsErrorLoading });
  }, [games, idGame, loadingGameByIdParams]);

  const isGame: boolean = game.id?.length !== 0;

  return (
    <InfoGamePageStyled>
      <h1>Info Game</h1>
      {isGame && <GameInfo game={game} />}
      {isErrorLoading && <Navigate to="/game/info-error" />}
      <CommentForm gameId={game.id} />
      <CommentsListGame />
    </InfoGamePageStyled>
  );
};

export default InfoGamePage;
