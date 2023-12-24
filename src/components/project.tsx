import EachProject from "./eachProject";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FC } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/16/solid";
import WebgpuPic from "../assets/images/pic/projects/create-webgpu-pic.webp";
import DogCatPicture from "../assets/images/pic/projects/dog-cat-pic.webp";

interface projectStructure {
  name: string;
  pic: string;
}

const projectName: projectStructure[] = [
  {
    name: "create-webgpu-app",
    pic: WebgpuPic,
  },
  {
    name: "cat-dog-detector",
    pic: DogCatPicture,
  },
];

const Project = () => {
  const { t } = useTranslation();

  interface CustomArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }

  const CustomPrevArrow: FC<CustomArrowProps> = (props) => (
    <div
      className="custom-arrow prev-arrow 2xl:px-10 2xl:w-3/12 xs:w-2/4 xs:pl-2"
      onClick={props.onClick}
    >
      <ChevronLeftIcon className="cursor-pointer" />
    </div>
  );

  const CustomNextArrow: FC<CustomArrowProps> = (props) => (
    <div
      className="custom-arrow prev-arrow 2xl:px-10 2xl:w-3/12 xs:w-2/4 xs:pr-2"
      onClick={props.onClick}
    >
      <ChevronRightIcon className="cursor-pointer" />
    </div>
  );

  return (
    <section
      id="project"
      className="w-full h-full flex justify-center items-center"
    >
      <Slider
        dots={true}
        infinite={true}
        arrows={true}
        autoplay={true}
        autoplaySpeed={3000}
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
        className="flex items-center w-full h-full"
      >
        {projectName.map((el, idx) => {
          const name = el.name;
          const pic = el.pic;
          return (
            <EachProject
              name={t(`project.${name}.name`)}
              pic={pic}
              description={t(`project.${name}.description`)}
              link={name}
              key={idx}
            ></EachProject>
          );
        })}
      </Slider>
    </section>
  );
};

export default Project;
