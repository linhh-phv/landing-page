import { lazy } from "react";
const LandingPage = lazy(() => import("@features/landingPage"));

interface IProps {}

const HomePage: React.FC<IProps> = ({}) => {
  return (
    <>
      <LandingPage />
    </>
  );
};

export default HomePage;
