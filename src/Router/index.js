import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routesData } from "../Config";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routesData.map((route) => (
          <Route
            exact
            key={route.path}
            path={route.path}
            render={(props) => <route.component {...props} />}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
