import { useTranslation } from "react-i18next";

const Mail = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="form-container flex justify-center items-center h-full">
      <form className="send-mail grid grid-col-4 xs:gap-4 xs:pt-5">
        <input
          type="text"
          placeholder={t("contact.first")}
          className="outline-none border-b-2 border-gray-500 placeholder:text-zinc-700 placeholder:font-semibold 2xl:placeholder:text-lg placeholder:tracking-wider pb-1 mr-6 xs:placeholder:text-xs"
        />
        <input
          type="text"
          placeholder={t("contact.last")}
          className="outline-none border-b-2 border-gray-500 placeholder:text-zinc-700 placeholder:font-semibold 2xl:placeholder:text-lg placeholder:tracking-wider pb-1 mr-6 xs:placeholder:text-xs"
        />
        <input
          type="email"
          placeholder={t("contact.email")}
          className="outline-none border-b-2 border-gray-500 placeholder:text-zinc-700 col-span-2 placeholder:font-semibold 2xl:placeholder:text-lg placeholder:tracking-wider pb-1 mr-6 xs:placeholder:text-xs"
        />

        <textarea
          cols={10}
          rows={10}
          placeholder={t("contact.message")}
          className="outline-none border-b-2 border-gray-500 placeholder:text-zinc-700 col-span-2 placeholder:font-semibold 2xl:placeholder:text-lg placeholder:tracking-wider pb-1 mr-6 xs:placeholder:text-xs"
        ></textarea>
        <div className="button-container col-span-2 flex justify-center">
          <input
            type="submit"
            value={t("contact.send")}
            className="bg-zinc-800 text-white 2xl:text-xl font-bold rounded-3xl p-3 cursor-pointer mt-12 w-2/4 xs:text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default Mail;
