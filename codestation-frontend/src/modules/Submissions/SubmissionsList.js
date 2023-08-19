import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// context
import { useAppContext } from "../../contexts/AppProvider";
import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box,
} from "@chakra-ui/react";

const SubmissionsList = () => {
  const { user } = useAppContext();
  const { id } = useParams();
  const [submissions, setSubmissions] = useState();

  const fetchSubmissions = async () => {
    const res = await fetch(`/submission/${id}?userId=${user?.id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${user?.token}` },
    });

    const resJson = await res.json();
    if (resJson?.status === "ok") {
      setSubmissions(resJson?.submissions);
    }
  };

  useEffect(() => {
    if (!submissions) fetchSubmissions();
  }, [user]);

  return (
    <>
      <Heading mb="40px">Submissions</Heading>
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
              <Box
                border="1px solid black"
                borderRadius="8px"
                width="60vw"
                height="40vh"
                padding="20px"
                overflow="auto"
              >
                {submission?.submissionCode}
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default SubmissionsList;
