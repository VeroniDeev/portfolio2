import Competences from "./components/competences";
import Contact from "./components/contact";
import Presentation from "./components/presentation";
import Project from "./components/project";
import Welcome from "./components/welcome";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        // Title
        <title>Zoubheir - {t("head.home_title")}</title>
        <meta
          name="twitter:title"
          content={"Zoubheir - " + t("head.home_title")}
        />
        <meta
          property="og:title"
          content={"Zoubheir - " + t("head.home_title")}
        ></meta>
        <meta
          name="apple-mobile-web-app-title"
          content={"Zoubheir - " + t("head.home_title")}
        />
        // Description
        <meta name="description" content={t("head.description")} />
        <meta name="twitter:description" content={t("head.description")} />
        <meta property="og:description" content={t("head.description")} />
      </Helmet>
      <Welcome></Welcome>
      <Presentation></Presentation>
      <Competences></Competences>
      <Project></Project>
      <Contact></Contact>
    </>
  );
}

export default App;
