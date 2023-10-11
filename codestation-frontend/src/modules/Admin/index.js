import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

// components
import AddProblemForm from "./AddProblemForm";

const Admin = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/add-problem`} component={AddProblemForm} />
      {/* To-do add route for adding an admin  */}
    </Switch>
  );
};

export default Admin;
