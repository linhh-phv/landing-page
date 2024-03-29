import BGDownload from "@assets/landingPage/bg-download.png";
import Button from "@features/landingPage/elements/button";
import Text from "@features/landingPage/elements/text";

interface IProps {}

const AppDownload: React.FC<IProps> = ({}) => {
  return (
    <section>
      {/* background */}
      <div
        className="relative w-full h-[620px] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${BGDownload})` }}
      >
        <div
          className="
                absolute
                top-1/2
                left-1/2
                transform
                -translate-x-1/2 -translate-y-1/2
                text-center text-white
                z-10
              "
        >
          {/* title */}
          <Text label="Download the app now" type="title" />

          {/* desc */}
          <Text
            label="Available on your favorite store. Start your premium experience now"
            type="des"
            className="font-light"
          />

          {/* buttons */}
          <div className="flex justify-center">
            <Button label="Playstore" type="primary" />
            <Button label="Appstore" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
