import { render } from "preact";
import Router, { Route } from "preact-router";
import { Link } from "preact-router/match";

import "./index.css";
import petalsLeft from "./img/petals_left_low.png";
import petalsRight from "./img/petals_right_low.png";
import { Home } from "./pages/home";
import { About } from "./pages/about";

const Main = () => {
  return (
    <>
      <img src={petalsLeft} class="h-screen absolute" />

      <div class="mx-auto h-screen flex flex-col">
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
            <Route path="/itinerary" component={About} />
          </Router>
        </div>
      </div>

      <img src={petalsRight} class="h-screen absolute bottom-0 right-0" />
    </>
  );
};

render(<Main />, document.getElementById("app")!);
