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
    window.open(link, "_blank");
  };
  return (
    <section
      ref={dataFromContext?.sectionAboutRef}
      className="container mx-auto p-4"
    >
      <div
        className="relative h-[440px] md:h-[500px] p-4 md:p-6 rounded-xl md:rounded-2xl text-white"
        style={{
          backgroundImage: `url(https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/335443725_118780447732664_643392126438155769_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kCqoK1FU7DgAX8wy35R&_nc_ht=scontent-hkg4-1.xx&oh=00_AfCRc0dkT3k0mn7hIpsfKtCDi87nBtZ9pU9BLD5xqcnB_g&oe=660C8D99)`,
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

          <div className="">
            <Text label="Xin chào những con người cutee đã ghé vào đâyy 🐬" />
          </div>

          <div className="mt-4">
            <Text label="Đây là những món đồ mình đã mặc và review trên kênh của mình nè, mọi người ưng thì vào mua nha. 💃🏻" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroYourSelf;
