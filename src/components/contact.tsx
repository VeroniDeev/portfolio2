import Mail from "./mail";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="w-full h-auto flex items-center lg:justify-around lg:flex-row xs:flex-col xs:justify-between"
    >
      <div className="left-part lg:w-2/4 flex justify-center xs:w-full">
        <div className="text-zone lg:w-2/4 xs:w-10/12">
          <h2 className="tracking-wider 2xl:text-4xl lg:text-2xl font-bold xs:text-lg">
            {t("contact.contactme")}
          </h2>
          <p className="tracking-wider 2xl:text-lg lg:text-sm pt-8 xs:text-sm">
            {t("contact.description")}
          </p>
        </div>
      </div>
      <div className="right-part lg:w-2/4 lg:h-3/4 lg:border-l-2 border-gray-500 xs:w-10/12 xs:h-auto xs:my-5">
        <Mail></Mail>
      </div>
    </section>
  );
};

export default Contact;
