import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Error = () => {
  const { t, i18n } = useTranslation();
  return (
    <main className="w-full h-full flex justify-center items-center ">
      <div className="container 2xl:w-2/4 2xl:h-2/6 flex flex-col justify-around items-center xs:w-10/12 xs:h-3/6">
        <h1 className="2xl:text-3xl font-bold xs:text-xl">{t("error.oops")}</h1>
        <h3 className="2xl:text-xl font-semibold xs:text-base">
          {t("error.indication")}
        </h3>
        <p className="2xl:text-lg font-medium xs:text-base">
          {t("error.should_do")}
          <Link to="/" className="text-blue-700 font-semibold">
            {t("error.homepage")}
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Error;
