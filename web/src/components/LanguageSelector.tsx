import { useTranslation } from "react-i18next";

import ca_flag from "../img/ca-flag.webp";
import mx_flag from "../img/mx-flag.webp";

const langOptsImages = {
  en: ca_flag,
  es: mx_flag,
} as const;
const langOpts = Object.keys(langOptsImages);

export const LanguageSelector = (
  props: React.HTMLAttributes<HTMLDivElement>,
) => {
  const { i18n } = useTranslation("common");
  const nextLang =
    langOpts[(langOpts.indexOf(i18n.language) + 1) % langOpts.length];
  return (
    <div {...props}>
      <button
        class="bg-transparent p-0 mx-auto h-8 flex items-baseline"
        onClick={() => i18n.changeLanguage(nextLang)}
      >
        <img
          class="h-5 w-7 mr-2 my-1 rounded drop-shadow"
          src={langOptsImages[i18n.language as keyof typeof langOptsImages]}
        />
        {i18n.language.toUpperCase()}
      </button>
    </div>
  );
};
