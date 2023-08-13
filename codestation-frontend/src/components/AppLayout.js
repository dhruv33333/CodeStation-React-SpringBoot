import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import ProblemsList from "../modules/Problems/ProblemsList";
import ProblemPage from "../modules/Problems/ProblemPage";
import SubmissionsList from "../modules/Submissions/SubmissionsList";
import { AppHeader, NotFound } from "./index";
import { Box } from "@chakra-ui/react";

const AppLayout = () => {
  return (
    <div>
      <AppHeader />
      <Box p={16}>
        <Switch>
          <Route path="/explore" component={() => <div>explore</div>} />
          <Route path="/problemset-all" component={ProblemsList} />
          <Route path="/problem/:id" component={ProblemPage} />
          <Route path="/submissions/:id" component={SubmissionsList} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Box>
    </div>
  );
};

export default AppLayout;
