import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Spinner } from "@components/index";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
};

export const protectedRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/users", element: <div>user</div> },
      { path: "/profile", element: <div>profile</div> },
      { path: "/", element: <div>Dashboard</div> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
