import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// assets
import { AiOutlineCheck } from "react-icons/ai";

// context
import { useAppContext } from "../../contexts/AppProvider";

// consts
import { difficultyColorMap } from "./consts";

// components
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
} from "@chakra-ui/react";

const ProblemsList = () => {
  const [problems, setProblems] = useState(null);
  const [allSubmissions, setAllSubmissions] = useState(null);
  const { user } = useAppContext();

  const getAllPrograms = async () => {
    const res = await fetch("/problem/all", {
      method: "GET",
      headers: { Authorization: `Bearer ${user?.token}` },
    });
    const resJson = await res.json();
    if (resJson?.status === "ok") {
      setProblems(resJson?.problems);
    }
  };

  const getAllSubmissions = async () => {
    const res = await fetch("/submission/getSubmissionsInfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    });

    const resJson = await res.json();
    if (resJson?.status === "ok") {
      setAllSubmissions(resJson?.submissions);
    }
  };

  useEffect(() => {
    if (!problems && user) getAllPrograms();
    if (!allSubmissions && user) getAllSubmissions();
  }, [user]);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Status</Th>
            <Th>Title</Th>
            <Th>Acceptance</Th>
            <Th>Difficulty</Th>
          </Tr>
        </Thead>
        <Tbody>
          {problems?.map((problem) => {
            let isProblemSolved = false;
            allSubmissions?.forEach((s) => {
              if (s?.problemId === problem?.id && s?.accepted) {
                isProblemSolved = true;
              }
            });
            const status = isProblemSolved ? <AiOutlineCheck /> : "--";

            return (
              <Tr>
                <Td>{status}</Td>
                <Td>
                  <Link to={`/problem/${problem?.id}`}>{problem?.title}</Link>
                </Td>
                <Td>{problem?.acceptance}</Td>
                <Td>
                  <Badge colorScheme={difficultyColorMap[problem?.difficulty]}>
                    {problem?.difficulty}
                  </Badge>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProblemsList;
