import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Nav } from "../components/nav";

export const Pages = () => {
  return (
    <>
      {/* router */}
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/">{/* Homepage */}</Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
