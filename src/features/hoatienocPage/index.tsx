import { lazy, useRef } from "react";
import { HoatienocContext } from "./context";
const Share = lazy(() => import("./components/Share"));
const Header = lazy(() => import("./components/Header"));
const IntroYourSelf = lazy(() => import("./components/IntroYourSelf"));
const Products = lazy(() => import("./components/Products"));
const Footer = lazy(() => import("./components/Footer"));

interface IProps {}

const HoatienocPage: React.FC<IProps> = ({}) => {
  const sectionProductRef = useRef<HTMLDivElement>(null);
  const sectionAboutRef = useRef<HTMLDivElement>(null);

  const scrollToSectionProduct = () => {
    if (sectionProductRef.current) {
      const sectionTop = sectionProductRef.current.offsetTop;
      window.scrollTo({ top: sectionTop - 120, behavior: "smooth" });
    }
  };
  const scrollToSectionAbout = () => {
    if (sectionAboutRef.current) {
      const sectionTop = sectionAboutRef.current.offsetTop;
      window.scrollTo({ top: sectionTop - 120, behavior: "smooth" });
    }
  };
  return (
    <HoatienocContext.Provider
      value={{
        scrollToSectionProduct,
        sectionProductRef,
        scrollToSectionAbout,
        sectionAboutRef,
      }}
    >
      <Share />
      <Header />
      <IntroYourSelf />
      <Products />
      <Footer />
    </HoatienocContext.Provider>
  );
};

export default HoatienocPage;
