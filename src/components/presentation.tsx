import me from "../assets/images/pic/me.webp";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Presentation = () => {
  const { t } = useTranslation();
  const imgRef = useRef(null);
  const presRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const img = imgRef.current;
    const pres = presRef.current;
    const container = containerRef.current;

    if (!isMobile) {
      gsap.from(img, {
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
        x: "-100%",
        ease: "expo.inOut",
        opacity: 0,
        duration: 0.6,
      });

      gsap.from(pres, {
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },

        x: "100%",
        ease: "none",
        opacity: 0,
        duration: 0.4,
      });
    }
  }, []);
  return (
    <section
      id="presentation"
      className="w-full h-full flex items-center lg:flex-row md:justify-around xs:flex-col xs:justify-normal"
      ref={containerRef}
    >
      <div className="left-part w-2/4 h-2/4 md:flex md:justify-center">
        <img
          src={me}
          alt="Picture of me"
          className="me rounded-xl opacity-100"
          draggable="false"
          ref={imgRef}
        />
      </div>
      <div
        className="right-part md:w-2/4 lg:h-4/6 flex items-center opacity-100 xs:w-11/12 xs:h-2/4"
        ref={presRef}
      >
        <div className="right-part-container flex flex-col items-center md:justify-around md:h-3/6 xs:h-full xs:justify-start">
          <h2 className="tracking-wider font-bold 2xl:text-6xl lg:text-4xl xs:text-md md:text-4xl">
            {t("presentation.hello")}
          </h2>
          <p className="tracking-wider lg:w-5/6 md:text-left lg:text-left lg:text-sm xs:text-xs xs:w-full xs:text-center ">
            {t("presentation.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
