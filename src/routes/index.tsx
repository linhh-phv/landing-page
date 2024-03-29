import { useRoutes } from "react-router-dom";

import { publicRoutes } from "./public";
import { lazy } from "react";

const HomePage = lazy(() => import("@pages/homePage"));

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <HomePage /> }];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
