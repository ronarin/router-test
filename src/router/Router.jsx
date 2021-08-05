import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((router) => (
              <Route
                key={router.path}
                exact={router.exact}
                path={`${url}${router.path}`}
              >
                {router.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((router) => (
              <Route
                key={router.path}
                exact={router.exact}
                path={`${url}${router.path}`}
              >
                {router.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
};
