import BGBanner from "@assets/landingPage/bg-app-image.png";

interface IProps {}

const AppImage: React.FC<IProps> = ({}) => {
  return (
    <section className="relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/4">
        <img
          src={BGBanner}
          alt="phone app screens"
          className="max-w-none w-screen pl-20 md:w-auto"
        />
      </div>
    </section>
  );
};

export default AppImage;
