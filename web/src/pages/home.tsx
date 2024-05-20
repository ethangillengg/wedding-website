import { LinkButton } from "../components/LinkButton";
import ringImgUrl from "../img/ring.png";

import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation("common");
  return (
    <div class="flex flex-col w-min items-center">
      <img src={ringImgUrl} class="h-24 sm:h-32 pb-4" />
      <h1 class="mb-2">
        Diara&nbsp;
        <span class="font-normal text-3xl sm:text-4xl md:text-5xl">&</span>
        &nbsp;Ethan
      </h1>
      <h2 class="mb-4 sm:mb-8">{t("Aug. 10th")}</h2>

      <div class="text-wrap w-min flex flex-col gap-4 text-2xl sm:text-3xl md:text-4xl">
        <LinkButton href="https://forms.gle/7jqXUvQzjxSxhbvq6">
          {t("RSVP")}
        </LinkButton>
      </div>
    </div>
  );
};
