import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Nav } from "../components/nav/Nav";
import { HomePage } from "./HomePage";

export const Pages = () => {
  return (
    <>
      {/* router */}
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
