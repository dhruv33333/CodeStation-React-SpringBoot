import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Login from "../src/modules/Login";
import AppLayout from "../src/components/AppLayout";

function App() {
  return (
    <Switch>
      <Route path={["/", "/login"]} component={Login} exact />
      <Route path="*" component={AppLayout} />
    </Switch>
  );
}

export default App;
