import me from "../assets/images/pic/me.png";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Presentation = () => {
  const { t, i18n } = useTranslation();
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
          markers: true,
          start: "top 70%",
        },
        x: "-100%",
        ease: "expo.inOut",
        opacity: 0,
        duration: 0.6,
      });

      gsap.from(pres, {
        scrollTrigger: {
          trigger: container,
          markers: true,
          start: "top 70%",
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
      className="w-full h-full flex items-center 2xl:flex-row 2xl:justify-around xs:flex-col xs:justify-normal"
      ref={containerRef}
    >
      <div className="left-part w-2/4 h-2/4 flex justify-center">
        <img
          src={me}
          alt="Picture of me"
          className="me rounded-xl opacity-100"
          draggable="false"
          width="auto"
          height="100%"
          ref={imgRef}
        />
      </div>
      <div
        className="right-part 2xl:w-2/4 h-4/6 flex items-center opacity-100 xs:w-11/12"
        ref={presRef}
      >
        <div className="right-part-container flex flex-col items-center 2xl:justify-around 2xl:h-3/6 xs:h-full xs:justify-center">
          <h2 className="tracking-wider font-bold 2xl:text-6xl xs:text-2xl">
            {t("presentation.hello")}
          </h2>
          <p className="tracking-wider 2xl:w-5/6 2xl:text-left 2xl:text-lg xs:text-xs xs:w-full xs:text-center">
            {t("presentation.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
