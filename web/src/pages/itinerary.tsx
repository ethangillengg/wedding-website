import { useTranslation } from "react-i18next";
import ceremonyVenueImg from "../img/cpr_house.webp";
import receptionVenueImg from "../img/cassils.webp";

export const Itinerary = () => {
	const { t } = useTranslation("common");
	return (
		<div class="text-center w-full">
			<h1>{t("Itinerary")}</h1>
			<div class="flex flex-col lg:flex-row gap-12 mt-4 w-full">
				<div>
					<img
						src={ceremonyVenueImg}
						class="mx-auto rounded-full w-32 h-32 object-cover mb-2"
					/>
					<h2>{t("Ceremony")}</h2>
					<strong>
						<a href="https://maps.app.goo.gl/9eRT9tR6WGajiAQc8">
							CPR Engineer's House
						</a>
					</strong>
					<ul>
						<li>
							<strong>1:30PM</strong> - {t("pages.itinerary.130PM")}
						</li>
						<li>
							<strong>2:00PM</strong> - {t("pages.itinerary.200PM")}
						</li>
					</ul>
				</div>
				<div>
					<img
						src={receptionVenueImg}
						class="mx-auto rounded-full w-32 h-32 object-cover mb-2"
					/>
					<h2>{t("Reception")}</h2>
					<strong>
						<a href="https://maps.app.goo.gl/kBTWoKZuDzqUjw1H8">
							Cassils Community Center
						</a>
					</strong>
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
