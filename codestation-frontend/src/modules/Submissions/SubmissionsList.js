import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// context
import { useAppContext } from "../../contexts/AppProvider";

// components
import CodeMirror from "@uiw/react-codemirror";
import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { EmptyState, PageLoader } from "../../components";

const SubmissionsList = () => {
  const { user } = useAppContext();
  const { id } = useParams();
  const [submissions, setSubmissions] = useState();
  const [isFetching, setIsFetching] = useState(false);

  const fetchSubmissions = async () => {
    setIsFetching(true);
    const res = await fetch(`/submission/${id}?userId=${user?.id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${user?.token}` },
    });

    const resJson = await res.json();
    if (resJson?.status === "ok") {
      const submissions = resJson?.submissions?.reverse();
      setSubmissions(submissions);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    if (!submissions) fetchSubmissions();
  }, [user]);

  return (
    <>
      <Heading mb="40px">Submissions</Heading>

      {isFetching && <PageLoader />}
      {!isFetching && submissions?.length === 0 && (
        <EmptyState title="No submissions found for this problem." />
      )}
      {!isFetching && submissions?.length > 0 && (
        <Tabs
          defaultIndex={0}
          display="flex"
          width="100vw"
          justifyContent="space-between"
          gap="120px"
        >
          <TabList display="flex" flexDirection="column">
            {submissions?.map((submission) => {
              const isAccepted = submission.accepted;
              return (
                <Tab width="152px">{isAccepted ? "Accepted" : "Rejected"}</Tab>
              );
            })}
          </TabList>
          <TabPanels>
            {submissions?.map((submission) => (
              <TabPanel>
                <CodeMirror
                  value={atob(submission?.submissionCode)}
                  height="fit-content"
                  maxHeight="70vh"
                  width="60vw"
                  theme="dark"
                  editable={false}
                />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </>
  );
};

export default SubmissionsList;
