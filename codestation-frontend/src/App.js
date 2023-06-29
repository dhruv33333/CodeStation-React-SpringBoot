import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import Login from "../src/modules/Login";

function App() {
  return (
    <Switch>
      {/* <Route path="/home" component={AppLayout} /> */}
      <Route path={["/", "/login"]} component={Login} exact />
    </Switch>
  );
}

export default App;
