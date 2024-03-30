import { lazy } from "react";
// const LandingPage = lazy(() => import("@features/landingPage"));
const HoatienocPage = lazy(() => import("@features/hoatienocPage"));

interface IProps {}

const HomePage: React.FC<IProps> = ({}) => {
  return (
    <>
      <HoatienocPage />
    </>
  );
};

export default HomePage;
