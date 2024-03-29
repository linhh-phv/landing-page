import { lazyImport } from "@utils/lazyImport";

const { AuthRoutes } = lazyImport(() => import("@features/auth/index"), "AuthRoutes");

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
