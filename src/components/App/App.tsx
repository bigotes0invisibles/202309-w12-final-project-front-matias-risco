import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useAppSelector } from "../../store/hooks";
import Loading from "../Loading/Loading";
import { ToastContainer } from "react-toastify";

const LazyHomePage = React.lazy(() => import("../../pages/HomePage/HomePage"));
const LazyAddGamePage = React.lazy(
  () => import("../../pages/AddGamePage/AddGamePage"),
);
const LazyInfoGamePage = React.lazy(
  () => import("../../pages/InfoGamePage/InfoGamePage"),
);
const LazyEditGamePage = React.lazy(
  () => import("../../pages/EditGamePage/EditGamePage"),
);
const LazyNotFoundPage = React.lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage"),
);

const App = (): React.ReactElement => {
  const { isLoading } = useAppSelector(({ uiState }) => uiState);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <React.Suspense>
              <LazyHomePage />
            </React.Suspense>
          }
        />
        <Route
          path="/game/add"
          element={
            <React.Suspense>
              <LazyAddGamePage />
            </React.Suspense>
          }
        />
        <Route
          path="/game/info/:idGame"
          element={
            <React.Suspense>
              <LazyInfoGamePage />
            </React.Suspense>
          }
        />
        <Route
          path="/game/edit/:idGame"
          element={
            <React.Suspense>
              <LazyEditGamePage />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense>
              <LazyNotFoundPage />
            </React.Suspense>
          }
        />
      </Routes>
      <NavigationBar />
      {isLoading && <Loading />}
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
      />
    </>
  );
};

export default App;
