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
import petalsLeft from "./img/pl.png";
import petalsRight from "./img/pr.png";
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
      <div class="flex justify-between h-lvh w-full absolute -z-50">
        <img
          src={petalsLeft}
          class="max-h-lvh w-1/4 max-w-32 place-self-start"
          style={{ objectFit: "cover" }}
        />
        <img
          src={petalsRight}
          class="max-h-lvh w-1/3 max-w-44 place-self-end"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div class="mx-auto h-dvh flex flex-col overflow-y-auto ">
        <Navbar />
        <div class="flex justify-center mt-8 mx-auto w-1/2 bg-gum-50 max-w-sm md:max-w-xl">
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
    </>
  );
};

render(<Main />, document.getElementById("app")!);
