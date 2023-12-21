import Mail from "./mail";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <section
      id="contact"
      className="w-full h-auto flex items-center 2xl:justify-around 2xl:flex-row xs:flex-col xs:justify-between"
    >
      <div className="left-part 2xl:w-2/4 flex justify-center xs:w-full">
        <div className="text-zone 2xl:w-2/4 xs:w-10/12">
          <h2 className="tracking-wider 2xl:text-4xl font-bold xs:text-2xl">
            {t("contact.contactme")}
          </h2>
          <p className="tracking-wider 2xl:text-lg pt-8 xs:text-sm">
            {t("contact.description")}
          </p>
        </div>
      </div>
      <div className="right-part 2xl:w-2/4 2xl:h-3/4 2xl:border-l-2 border-gray-500 xs:w-10/12 xs:h-auto xs:my-5">
        <Mail></Mail>
      </div>
    </section>
  );
};

export default Contact;
