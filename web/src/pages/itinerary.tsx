import { useTranslation } from "react-i18next";

export const Itinerary = () => {
  const { t } = useTranslation("common");
  return (
    <div class="text-center">
      <h1>{t("Itinerary")}</h1>
      <div class="flex flex-col">
        <div class="mt-4">
          <h2>{t("Ceremony")}</h2>
          <ul>
            <li>
              <strong>1:30PM</strong> - {t("pages.itinerary.130PM")}
            </li>
            <li>
              <strong>2:00PM</strong> - {t("pages.itinerary.200PM")}
            </li>
          </ul>
        </div>
        <div class="mt-4">
          <h2>{t("Reception")}</h2>
          <ul>
            <li>
              <strong>4:00PM</strong> - {t("pages.itinerary.400PM")}
            </li>
            <li>
              <strong>5:00PM</strong> - {t("pages.itinerary.500PM")}
            </li>
            <li>
              <strong>5:30PM</strong> - {t("pages.itinerary.530PM")}
            </li>
            <li>
              <strong>7:30PM</strong> - {t("pages.itinerary.730PM")}
            </li>
            <li>
              <strong>12:00AM</strong> - {t("pages.itinerary.1200AM")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
