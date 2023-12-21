import { FC } from "react";
import { useTranslation } from "react-i18next";

interface EachProjectProps {
  name: string;
  pic: string;
  description: string;
  link: string;
}

const EachProject: FC<EachProjectProps> = ({
  name,
  pic,
  description,
  link,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h3 className="tracking-wider 2xl:text-3xl font-bold xs:text-base">
        {name}
      </h3>
      <img
        src={pic}
        alt={"One of my project " + { name }}
        className="rounded-lg w-5/6 h-auto"
        draggable="false"
      />
      <p className="tracking-wider w-11/12 2xl:text-base text-center xs:text-xs">
        {description}
      </p>
      <a
        href={"projects/" + link}
        className="tracking-wider py-2 px-9 bg-zinc-800 text-white rounded-3xl 2xl:text-xl font-bold xs:text-xs"
      >
        {t("project.see")}
      </a>
    </div>
  );
};

export default EachProject;
