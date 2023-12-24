import Lottie from "lottie-react";
import frame from "../assets/images/icons/swipBounce.json";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

gsap.registerPlugin();

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <section
      id="welcome"
      className="w-full h-full flex flex-col justify-center items-center relative"
    >
      <div className="text-part flex flex-col items-center z-10">
        <h1 className="name overflow-hidden block tracking-wider 2xl:text-6xl font-bold p-1 xs:text-4xl">
          Zoubheir
        </h1>
        <h3 className="role overflow-hidden block tracking-wider 2xl:text-base font-medium xs:text-xs">
          {t("welcome.role")}
        </h3>
        <Lottie animationData={frame} className="2xl:h-16 mt-6 xs:h-10" />
      </div>
    </section>
  );
};

export default Welcome;
