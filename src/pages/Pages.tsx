import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Nav } from "../components/nav/Nav";
import { HomePage } from "./HomePage";
import { PricingPage } from "./PricingPage";

export const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/pricing">
            <PricingPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
          {/* <Redirect from="*" to="/" /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};
