import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Nav } from "../components/nav/Nav";
import { LoadingIcon } from "../utility/LoadingIcon";

const ContactPage = React.lazy(() => import("./ContactPage"));
const HomePage = React.lazy(() => import("./HomePage"));
const PricingPage = React.lazy(() => import("./PricingPage"));

export const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Suspense fallback={<LoadingIcon />}>
          <Switch>
            <Route exact path="/pricing">
              <PricingPage />
            </Route>
            <Route exact path="/signup">
              <ContactPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
            {/* <Redirect from="*" to="/" /> */}
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
};
