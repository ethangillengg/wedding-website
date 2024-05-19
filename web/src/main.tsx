import { render } from "preact";
import Router, { Route } from "preact-router";
import { Link } from "preact-router/match";

import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";

import "./index.css";
import petalsLeft from "./img/petals_left.png";
import petalsRight from "./img/petals_right.png";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Itinerary } from "./pages/itinerary";

const Main = () => {
  // Vercel analytics and speed insights
  inject();
  injectSpeedInsights();
  return (
    <>
      <div class="flex justify-between min-h-dvh w-full absolute -z-50">
        <img
          src={petalsLeft}
          class="max-h-dvh w-1/4 max-w-32 place-self-start"
          style={{ objectFit: "cover" }}
        />
        <img
          src={petalsRight}
          class="max-h-dvh w-1/3 max-w-44 place-self-end"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div class="mx-auto h-dvh flex flex-col">
        <div class="flex mx-auto text-center py-4 text-2xl sm:flex-row sm:gap-8 md:gap-16 flex-col gap-4 ">
          <Link href="/" activeClassName="text-gum-500 underline">
            Home
          </Link>
          <Link href="/itinerary" activeClassName="text-gum-500 underline">
            Itinerary
          </Link>
          <a
            href="https://www.amazon.ca/wedding/share/diara-and-ethan"
            target="_blank"
          >
            Registry
          </a>
          <Link href="/about" activeClassName="text-gum-500 underline">
            About
          </Link>
        </div>

        <div class="flex justify-center h-full mt-8">
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/itinerary" component={Itinerary} />
          </Router>
        </div>
      </div>
    </>
  );
};

render(<Main />, document.getElementById("app")!);
