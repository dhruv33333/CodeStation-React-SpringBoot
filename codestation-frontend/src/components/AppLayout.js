import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import AllProblems from "../modules/AllProblems";
import { AppHeader, NotFound } from "./index";
import { Box } from "@chakra-ui/react";

const AppLayout = () => {
  return (
    <div>
      <AppHeader />
      <Box p={16}>
        <Switch>
          <Route path="/explore" component={() => <div>explore</div>} />
          <Route path="/problemset-all" component={AllProblems} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Box>
    </div>
  );
};

export default AppLayout;
