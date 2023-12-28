import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/16/solid";
import gsap from "gsap";

interface emailParam extends Record<string, string> {
  from_name: string;
  reply_to: string;
  message: string;
}

const Mail = () => {
  const { t } = useTranslation();
  const firstname = useRef<HTMLInputElement>(null);
  const lastname = useRef<HTMLInputElement>(null);
  const mail = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const ok = useRef<HTMLDivElement>(null);
  const error = useRef<HTMLDivElement>(null);
  const { VITE_EMAILJS_KEYS, VITE_TEMPLATE_ID, VITE_SERVICE_ID } = import.meta
    .env;

  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const timeline = gsap.timeline();

    const emailParam: emailParam = {
      from_name: `${firstname.current.value} ${lastname.current.value}`,
      reply_to: mail.current.value,
      message: message.current.value,
    };
    emailjs
      .send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, emailParam, VITE_EMAILJS_KEYS)
      .then(
        () => {
          const okEl = ok.current;
          timeline.to(okEl, {
            opacity: 1,
            duration: 0.4,
            zIndex: 20,
          });

          timeline.to(okEl, {
            opacity: 0,
            delay: 1.5,
            zIndex: 0,
          });

          firstname.current.value = "";
          lastname.current.value = "";
          mail.current.value = "";
          message.current.value = "";
        },
        () => {
          const errorEl = error.current;

          timeline.to(errorEl, {
            opacity: 1,
            duration: 0.4,
            zIndex: 20,
          });

          timeline.to(errorEl, {
            opacity: 0,
            delay: 1.5,
            zIndex: 0,
          });
        }
      );
  };

  return (
    <div className="form-container flex justify-center items-center h-full relative">
      <div
        className="result-ok z-0 absolute top-0 right-0 opacity-0 2xl:w-auto bg-green-500 py-2 px-5 rounded-lg flex justify-between xs:w-2/4"
        ref={ok}
      >
        <div className="icon 2xl:w-2/4 xs:w-2/6">
          <CheckIcon color="#E5E7EB" />
        </div>
        <p className="text-gray-200 font-bold text-center 2xl:text-base xs:text-sm">
          Message envoyé
        </p>
      </div>
      <div
        className="result-error z-0 absolute top-0 right-0 opacity-0 2xl:w-auto bg-red-500 py-2 px-5 rounded-lg flex justify-between xs:w-2/4"
        ref={error}
      >
        <div className="icon 2xl:w-2/4 xs:w-2/6">
          <XMarkIcon color="#E5E7EB" />
        </div>
        <p className="text-gray-200 font-bold text-center 2xl:text-base xs:text-sm">
          Message non envoyé
        </p>
      </div>
      <form
        className="send-mail grid grid-col-4 xs:gap-4 xs:pt-5"
        onSubmit={send}
      >
        <input
          type="text"
          placeholder={t("contact.first")}
          className="rounded-none outline-none border-b-2 border-gray-500 placeholder:text-zinc-700 placeholder:font-semibold 2xl:placeholder:text-lg placeholder:tracking-wider pb-1 mr-6 xs:placeholder:text-xs"
          ref={firstname}
          required
        />
        <input
          type="text"
          placeholder={t("contact.last")}
          className="rounded-none z-10 outline-none border-b-2 border-gray-500 placeholder:text-zinc-700 placeholder:font-semibold 2xl:placeholder:text-lg placeholder:tracking-wider pb-1 mr-6 xs:placeholder:text-xs"
          ref={lastname}
          required
        />
        <input
          type="email"
          placeholder={t("contact.email")}
          className="rounded-none outline-none border-b-2 border-gray-500 placeholder:text-zinc-700 col-span-2 placeholder:font-semibold 2xl:placeholder:text-lg placeholder:tracking-wider pb-1 mr-6 xs:placeholder:text-xs"
          ref={mail}
          required
        />

        <textarea
          cols={10}
          rows={5}
          placeholder={t("contact.message")}
          className="rounded-none resize-none outline-none border-b-2 border-gray-500 placeholder:text-zinc-700 col-span-2 placeholder:font-semibold 2xl:placeholder:text-lg placeholder:tracking-wider pb-1 mr-6 xs:placeholder:text-xs"
          ref={message}
          required
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
