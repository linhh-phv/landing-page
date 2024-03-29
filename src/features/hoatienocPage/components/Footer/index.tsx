import ICLogo from "@assets/hoatienocPage/coffee.png";

interface IProps {}

const Footer: React.FC<IProps> = ({}) => {
  return (
    <footer>
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center py-5 md:flex-row">
          <div className="w-20">
            <img src={ICLogo} alt="website logo" />
          </div>
          <div className="flex items-center mt-5 text-gray-500 w-full justify-center md:justify-end">
            <a href="tel:0362217421" className="flex mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>035-592-1816</p>
            </a>
            <a href="mailto:hoatienoc@gmail.com" className="flex mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 mr-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <p>hoatienoc@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="text-center my-4">
          <p className="text-gray-500">Copy &copy; 2024 Hoa Tien Oc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
