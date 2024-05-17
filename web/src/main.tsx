import { render } from "preact";
import Router, { Route } from "preact-router";

import "./index.css";
import petalsLeft from "./img/petals_left_low.png";
import petalsRight from "./img/petals_right_low.png";
import { Home } from "./pages/home";
import { About } from "./pages/about";

const Main = () => {
  return (
    <>
      <img src={petalsLeft} class="h-screen absolute" />
      <img src={petalsRight} class="h-screen absolute right-0 bottom-0" />

      <div class="flex mx-auto px-32 justify-center h-screen">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    </>
  );
};

render(<Main />, document.getElementById("app")!);
