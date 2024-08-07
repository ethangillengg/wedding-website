import { render } from "preact";
import Router, { Route } from "preact-router";

// Localization (spanish)
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";

import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

import "./index.css";
import petalsLeft from "./img/pl.webp";
import petalsRight from "./img/pr.webp";
import { Home } from "./pages/home";
import { FAQ } from "./pages/faq";
import { Itinerary } from "./pages/itinerary";
import { createHashHistory } from "history";
import { Navbar } from "./components/Navbar";

const Main = () => {
	// Vercel analytics and speed insights
	inject();
	injectSpeedInsights();
	// Init localization framework
	i18next
		// .use(initReactI18next)
		.init({
			interpolation: { escapeValue: false }, // React already does escaping
			lng: "en", // language to use
			resources: {
				en: {
					common: common_en,
				},
				es: {
					common: common_es,
				},
			},
		});

	return (
		<I18nextProvider i18n={i18next}>
			<MainContent />
		</I18nextProvider>
	);
};

// Need seperate component for useTranslation
const MainContent = () => {
	return (
		<>
			<div class="grid grid-rows-1 grid-cols-[minmax(50px,_0.10fr)_1fr_minmax(60px,_0.13fr)] max-h-lvh h-dvh w-full overflow-auto">
				<img
					src={petalsLeft}
					class="sticky top-0 max-h-lvh"
					style={{ objectFit: "cover" }}
				/>

				<div class="flex mx-auto w-full flex-col ">
					<Navbar />
					<div class="flex justify-center mt-8 mx-auto px-4 w-full sm:w-1/2 bg-gum-50 max-w-sm md:max-w-xl">
						<Router
							// @ts-ignore
							history={createHashHistory()}
						>
							<Route path="/" component={Home} />
							<Route path="/frequently-asked-questions" component={FAQ} />
							<Route path="/itinerary" component={Itinerary} />
						</Router>
					</div>
					<div class="min-h-8 bg-gum-50 w-1/2 max-w-sm md:max-w-xl mx-auto" />
				</div>
				<div class="sticky top-0 pt-auto flex min-h-lvh">
					<img
						src={petalsRight}
						class="h-min place-self-end"
						style={{
							objectFit: "cover",
						}}
					/>
				</div>
			</div>
		</>
	);
};

render(<Main />, document.getElementById("app")!);
