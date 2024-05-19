import { useTranslation } from "react-i18next";

const langOptsDisplay = {
  es: "ES 🇲🇽",
  en: "EN 🇨🇦",
} as const;
const langOpts = Object.keys(langOptsDisplay);

export const LanguageSelector = (
  props: React.HTMLAttributes<HTMLDivElement>,
) => {
  const { i18n } = useTranslation("common");
  const nextLang =
    langOpts[(langOpts.indexOf(i18n.language) + 1) % langOpts.length];
  return (
    <div {...props}>
      <button
        class="bg-transparent p-0"
        onClick={() => i18n.changeLanguage(nextLang)}
      >
        {langOptsDisplay[i18n.language as keyof typeof langOptsDisplay]}
      </button>
    </div>
  );
};
