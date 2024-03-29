import ICLogo from "@assets/landingPage/ic-logo.png";
import { useState } from "react";
import './styles.css'
interface IProps {}

const Header: React.FC<IProps> = ({}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const renderLogo = () => {
    return (
      <div className="w-32 md:w-full z-20">
        <img src={ICLogo} alt="website logo" />
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
        <li className="m-12 md:m-0">
          <a href="#" className="c-link">
            Home
          </a>
        </li>
        <li className="m-12 md:m-0">
          <a href="#" className="c-link">
            Product
          </a>
        </li>
        <li className="m-12 md:m-0">
          <a href="#" className="c-link">
            FAQ
          </a>
        </li>
        <li className="m-12 md:m-0">
          <a href="#" className="c-link">
            Contact
          </a>
        </li>
      </ul>
    );
  };

  const renderMenu = () => {
    return (
      <div className="z-20 md:hidden cursor-pointer" onClick={toggleMenu}>
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
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
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
