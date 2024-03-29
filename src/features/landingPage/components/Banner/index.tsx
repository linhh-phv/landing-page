import BGBanner from "@assets/landingPage/bg-banner.png";
import Button from "@features/landingPage/elements/button";
import Text from "@features/landingPage/elements/text";

interface IProps {}

const Banner: React.FC<IProps> = ({}) => {
  return (
    <section>
      <div
        className="w-full bg-no-repeat bg-cover relative h-[620px]"
        style={{
          backgroundImage: `url(${BGBanner})`,
          // backgroundPosition: "center",
        }}
      >
        <div
          className="
                absolute
                top-1/2
                left-1/2
                transform
                -translate-x-1/2 -translate-y-1/2
                z-10
                text-white text-center
              "
        >
          {/* tag */}
          <Text label="Food app" type="des" />

          {/* title */}
          <Text
            label="Why stay hungry when you can order form Bella Onojie"
            type="title"
          />

          {/* desc */}
          <Text
            label="Download the bella onoje’s food app now on"
            type="des"
            className="font-light"
          />

          {/* buttons */}
          <div className="flex justify-center">
            <Button label="Playstore" />
            <Button
              label="Appstore"
              color="transparent"
              borderColor="white"
              hoverColor="red-500"
              hoverBorderColor="transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
