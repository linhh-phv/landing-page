import { lazy } from "react";
const Header = lazy(() => import("./components/Header"));
const Banner = lazy(() => import("./components/Banner"));
const AppImage = lazy(() => import("./components/AppImage"));
const AppHowItWorks = lazy(() => import("./components/AppHowItWorks"));
const AppDownload = lazy(() => import("./components/AppDownload"));
const Footer = lazy(() => import("./components/Footer"));

interface IProps {}

const LandingPage: React.FC<IProps> = ({}) => {
  return (
    <>
      <Header />
      <Banner />
      <AppImage />
      <AppHowItWorks />
      <AppDownload />
      <Footer />
    </>
  );
};

export default LandingPage;
