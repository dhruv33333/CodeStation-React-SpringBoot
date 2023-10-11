import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import ProblemsList from "../modules/Problems/ProblemsList";
import ProblemPage from "../modules/Problems/ProblemPage";
import SubmissionsList from "../modules/Submissions/SubmissionsList";
import Admin from "../modules/Admin";
import { AppHeader, NotFound } from "./index";
import { Box } from "@chakra-ui/react";

const AppLayout = () => {
  return (
    <div>
      <AppHeader />
      <Box p={16}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/explore" component={() => <div>explore</div>} exact />
          <Route path="/problemset-all" component={ProblemsList} exact />
          <Route path="/problem/:id" component={ProblemPage} exact />
          <Route path="/submissions/:id" component={SubmissionsList} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </Box>
    </div>
  );
};

export default AppLayout;
