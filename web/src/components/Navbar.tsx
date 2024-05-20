import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";
import { NavLink } from "./NavLink";

export const Navbar = () => {
  const { t } = useTranslation("common");
  return (
    <div class="flex mx-auto text-center lg:flex-row lg:gap-8 lg:gap-16 flex-col gap-4 py-4 text-2xl lg:text-2xl md:text-3xl">
      <NavLink href="/">{t("Home")}</NavLink>
      <NavLink href="/itinerary">{t("Itinerary")}</NavLink>
      <NavLink
        href="https://www.amazon.ca/wedding/share/diara-and-ethan"
        target="_blank"
      >
        {t("Registry")}
      </NavLink>
      <NavLink href="/frequently-asked-questions">{t("FAQ")}</NavLink>
      <LanguageSelector class="sm:ml-auto ml-0" />
    </div>
  );
};
