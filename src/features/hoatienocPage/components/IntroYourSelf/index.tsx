import BGAvatar from "@assets/hoatienocPage/hoatienoc.jpg";
import ICFB from "@assets/hoatienocPage/ic-fb.png";
import ICIG from "@assets/hoatienocPage/ic-ig.png";
import ICTiktok from "@assets/hoatienocPage/ic-tiktok.png";
import { HoatienocContext } from "@features/hoatienocPage/context";
import Text from "@features/hoatienocPage/elements/text";
import { useContext } from "react";

interface IProps {}

const IntroYourSelf: React.FC<IProps> = ({}) => {
  const dataFromContext = useContext(HoatienocContext);

  const onPressItem = (link: string) => {
    window.open(link, "_self");
  };

  return (
    <section
      ref={dataFromContext?.sectionAboutRef}
      className="container mx-auto p-4"
    >
      <div
        className="relative h-[440px] md:h-[500px] p-4 md:p-6 rounded-xl md:rounded-2xl text-white"
        style={{
          backgroundImage: `url(https://i.imgur.com/YB1Xn9Z.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20 rounded-xl md:rounded-2xl"></div>
        <div className="relative z-10">
          <div className=" flex justify-between">
            <img
              src={BGAvatar}
              alt="hoatienoc avt"
              className="w-28 md:w-48 rounded-full"
            />

            <div className="flex justify-between  gap-4">
              <img
                onClick={() =>
                  onPressItem("https://www.facebook.com/hoatien.oc.9")
                }
                src={ICFB}
                alt="icon social"
                className="w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer"
              />
              <img
                onClick={() =>
                  onPressItem("https://www.instagram.com/hoatienoc/")
                }
                src={ICIG}
                alt="icon social"
                className="w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer"
              />
              <img
                onClick={() => onPressItem("https://www.tiktok.com/@hoatienoc")}
                src={ICTiktok}
                alt="icon social"
                className="w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer"
              />
            </div>
          </div>

          <div className="">
            <Text label="Hoa Tiên Ốc" type="title" />
          </div>

          <p className="mt-4">
            Hi bae, bên dưới là những món đồ mình đã dùng và review nè.
            <br />
            Mọi người không tìm được sản phẩm nào hoặc muốn review sản phẩm nào
            thì inbox cho mình nha ❤️
          </p>
          <br />
          <br />
          <p>LOVE,</p>
          <p>Tien</p>
        </div>
      </div>
    </section>
  );
};

export default IntroYourSelf;
