import ICLogo from "@assets/hoatienocPage/hoatienoc.jpg";
import { useContext, useState } from "react";
import "./styles.css";
import { HoatienocContext } from "@features/hoatienocPage/context";
interface IProps {}

const Header: React.FC<IProps> = ({}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const dataFromContext = useContext(HoatienocContext);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const onClickProduct = () => {
    toggleMenu();
    dataFromContext?.scrollToSectionProduct();
  };
  const onClickAbout = () => {
    toggleMenu();
    dataFromContext?.scrollToSectionAbout();
  };

  const renderLogo = () => {
    return (
      <div className="w-20 z-20">
        <img src={ICLogo} alt="website logo" className="rounded-full " />
      </div>
    );
  };

  const renderNav = () => {
    return (
      <ul
        className={
          isVisible
            ? "visible md:visible c-menu"
            : "invisible md:visible c-menu"
        }
      >
        <div className="m-8 md:m-0">
          <div onClick={onClickProduct} className="c-link cursor-pointer">
            Sản phẩm
          </div>
        </div>
        <div className="m-8 md:m-0">
          <div className="c-link cursor-pointer">Buy me Coffee ☕️</div>
        </div>
        <div className="m-8 md:m-0">
          <div onClick={onClickAbout} className="c-link cursor-pointer">
            About
          </div>
        </div>
      </ul>
    );
  };

  const renderMenu = () => {
    return (
      <div className="z-20 md:hidden cursor-pointer" onClick={toggleMenu}>
        {!isVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow h-[120px]">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-5">
          {/*  logo  */}
          {renderLogo()}

          {/*  links  */}
          {renderNav()}

          {/*  menu button  */}
          {renderMenu()}
        </nav>
      </div>
    </header>
  );
};

export default Header;
