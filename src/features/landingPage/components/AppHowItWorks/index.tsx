import BGApp1 from "@assets/landingPage/bg-app-1.png";
import BGApp2 from "@assets/landingPage/bg-app-2.png";
import BGApp3 from "@assets/landingPage/bg-app-3.png";

import Step from "./Step";

interface IProps {}

const AppHowItWorks: React.FC<IProps> = ({}) => {
  return (
    <section className="pt-96 mt-28 sm:pt-[40rem] md:mt-0">
      {/* container */}
      <div className="container mx-auto px-4">
        <hr className="w-4/5 mx-auto h-0.5 bg-gray-200 md:w-2/5" />
        {/* tiltle */}
        <h2 className="text-center text-4xl font-semibold py-10">
          How the app works
        </h2>

        {/* Step 1 */}
        <Step
          imgSrc={BGApp1}
          tag="Create an account"
          title="Create/login to an existing account to get started"
          description="An account is created with your email and a desired password"
        />

        {/* Step 2 */}
        <Step
          imgSrc={BGApp2}
          tag="Create an account"
          title="Create/login to an existing account to get started"
          description="An account is created with your email and a desired password"
          orderRight
        />

        {/* Step 3 */}
        <Step
          imgSrc={BGApp3}
          tag="Create an account"
          title="Create/login to an existing account to get started"
          description="An account is created with your email and a desired password"
        />
      </div>
    </section>
  );
};

export default AppHowItWorks;
